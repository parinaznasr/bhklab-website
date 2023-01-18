import Layout from '../../../UtilComponents/Layout';
import StyledPosition from "./PositionCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const JoinUs= () => {
    const [ready, setReady] = useState(false);
    const [positions, setPositions] = useState({});
    const history = useNavigate();

    useEffect(() => {
        const getPositions = async () => {
            const res = await axios.get('/api/data/positions');
            console.log(res.data.positions)
            setPositions(res.data.positions);
            setReady(true);
        }
        getPositions();
    }, []);

    return(
        <Layout>
            {
                ready && positions.map((item, index)=>
                {
                    return(<StyledPosition key={index} position = {item}/>)
                })
            }
        </Layout>
    );
}

export default JoinUs;
