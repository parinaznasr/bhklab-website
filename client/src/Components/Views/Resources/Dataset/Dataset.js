import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import parse from 'html-react-parser';
import {StyledDataset, Container, Banner } from "./StyledDataset";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


const accessions = (items) => {
    return (
        items.map((item) => {
            return (
                <div className="content">
                    <a href={item.link} target= '_blank'>{item.name}</a><br/>
                </div>
            )
        })
    )
}

const filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;

    switch (typeof row[id]) {
        case 'object':
            // checks for metastasis label
            if (row[id] && row[id].origin) {
                return String('metastasis').includes(filter.value.toLowerCase());
            }
            // checks for disease name (additional check is to filter out null values)
            return row[id] && row[id].name
                ? String(row[id].name.toLowerCase()).includes(filter.value.toLowerCase())
                : false;
        // handles age filtering
        case 'number':
            return row[id].toString().includes(filter.value);
        case 'string':
            console.log(row[id])
            return String(row[id].toLowerCase()).includes(filter.value.toLowerCase());
        default:
            return false;
    }
};

const Dataset= () => {
    const [ready, setReady] = useState(false);
    const [datasets, setDataset] = useState({});
    const history = useNavigate();
    const columns = [
            {
            Header: 'Accession',
            accessor: 'accession',
            sortable: true,
            maxWidth:220,
            style: { 'whiteSpace': 'unset' },
            Cell: (row) => accessions(row.value),
        },
        {
            Header: 'Title',
            accessor: 'title',
            sortable: true,
            minWidth:400,
            style: { 'whiteSpace': 'unset' },
            Cell: (row) => {return(<div className="content">{parse(row.value)}</div>)}
        },
        {
            Header: '#',
            accessor: 'samples',
            sortable: true,
            maxWidth:100,
            Cell: (row) => row.value
        },
        {
            Header: 'Release',
            accessor: 'release',
            maxWidth:100,
            sortable: true,
        }];

    useEffect(() => {
        window.scrollTo(0, 0)
        const getDataset = async () => {
            const res = await axios.get('/api/data/datasets');
            setDataset(res.data.datasets);
        }
        getDataset().then(()=> {setReady(true)});
    }, []);

    useEffect(() => {
        return(() => {
            if(history.action === 'POP' && history.location.pathname === '/') {
                console.log('history')
                history.replace({
                    pathname: '/',
                    state: {
                    }
                });
            }
        });
    }, [history]);

    return(
        <Layout>
            <Container>
                Data generated/curated as part of our research are shared via public repositories such as NCBI Gene Expression Omnibus or data packages. My lab maintains the following datasets:
            </Container>
            <Container>
                <StyledDataset>
                    {
                        ready?
                            <ReactTable
                                data={datasets}
                                columns={columns}
                                // filterable
                                defaultFilterMethod={filterCaseInsensitive}
                                className="table-highlight"
                                defaultPageSize={datasets.length}
                                showPagination={false}
                            />
                            : ''
                    }
                </StyledDataset>
            </Container>
        </Layout>
    );
}

export default Dataset;
