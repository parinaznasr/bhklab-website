import styled from "styled-components";
import colors from "./colors";

export const StyledPaginate = styled.div`
  font-family: 'Roboto Slab', serif;

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
    color: ${colors.pagination};
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: ${colors.pagination};
  }

  .paginationActive a {
    border-radius: 7px;
    border-width: 3px;
    border: solid ${colors.pagination};
    color: ${colors.pagination};
  }
;
}

.paginationDisabled a {
  visibility: hidden;
  background-color: white;
}
`
