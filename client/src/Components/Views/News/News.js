import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../UtilComponents/Layout';
import { Markup } from 'interweave';
import Moment from "moment";
import axios from "axios";
import {TwitterFollowButton, TwitterTimelineEmbed} from 'react-twitter-embed';
import ReactPaginate from 'react-paginate';
import {Container, StyledNews, StyledPaginatedNews} from "./StyledNews";
import banner from './banner-news.png';

function Items({ currentItems }) {
    return (
        <React.Fragment>
            {
                currentItems && currentItems.map((item, index) => (<div key={index}>{item}</div>))
            }
        </React.Fragment>
    );
}


function PaginatedNews({ news, itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(news.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
            customizedContent(true, item, index))).slice(itemOffset, endOffset));
        setPageCount(Math.ceil(news.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % news.length;
        setItemOffset(newOffset);
    };

    return (
        <StyledPaginatedNews>
            <Items currentItems={currentItems} />
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                breakLabel="..."
                pageRangeDisplayed={5}
                renderOnZeroPageCount={null}
            />
        </StyledPaginatedNews>
    );
}

const customizedContent = ( divider , news, index) => {
    const {subject, content, date} = news;
    const current = new Date(date);
    return (
        <div className= "card" key = {index}>
            <div className='subject'>{subject}</div>
            <div className='content'><Markup content={content}/></div>
            <div className='date'>{ Moment(new Date(current.getFullYear(), current.getMonth(), 1)).format("MMM Do, YYYY")}</div>
        </div>
    );
}

const News = () => {
    const [ready, setReady] = useState(false);
    const [news, setNews] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getNews = async () => {
            const res = await axios.get('/api/data/news');
            setNews(res.data.news);
            setReady(true);
        }
        getNews();
    }, []);

    useEffect(() => {
        return(() => {
            if(history.action === 'POP' && history.location.pathname === '/') {
                console.log('history')
                history.replace({
                    pathname: '/',
                    state: {}
                });
            }
        });
    }, [history]);

    return(
        <Layout>
            <Container>
                    <img width="100%" src = {banner}/>
            </Container>

            <Container>
                <StyledNews main={true}>
                    { ready ? <PaginatedNews news= {news} itemsPerPage={5} /> : ''}
                </StyledNews>
                <StyledNews main={false}>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="bhklab"
                        options={{ width: 1000, height: 1000}}
                        tweetLimit={5}
                    />
                    {/*<iframe src="https://widget.taggbox.com/113630" style={{ borderRadius: "20px",width:"100%", height:'600px', border:'none'}}></iframe>*/}
                    {/*<TwitterFollowButton screenName={'bhklab'}/>*/}
                </StyledNews>
            </Container>
        </Layout>
    );
}

export default News;
