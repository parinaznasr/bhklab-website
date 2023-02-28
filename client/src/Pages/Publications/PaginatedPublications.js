import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import colors from "../../styles/colors";


const StyledPaginatedPublications = styled.div`
  .paginationBttns {
    width: 80%;
    height: 20px;
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 12px;
  }
  
  .paginationBttns a {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    color: ${colors.hyperlink};
    cursor: pointer;
  }
  .paginationBttns a:hover {
    color: white;
    background-color: ${colors.light_gray};
  }
  .paginationActive a {
    color: ${colors.origin};
    background-color: white;
  }
  .paginationDisabled a {
    color: white;
    background-color: white;
  }
`

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
            currentItems.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </>
    );
}


function PaginatedPublications({ customizedContent, publications, itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(publications.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
            customizedContent( item, index))).slice(itemOffset, endOffset));
        setPageCount(Math.ceil(publications.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, publications]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % publications.length;
        setItemOffset(newOffset);
    };

    return (
        <StyledPaginatedPublications>
            <Items currentItems={currentItems} />
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={"previous"}
                nextLabel={"next"}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                breakLabel="..."
                pageRangeDisplayed={5}
                renderOnZeroPageCount={null}
            />
        </StyledPaginatedPublications>
    );
}

export {
    PaginatedPublications
}
