import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  width: 80%;
  max-width: 1500px;
  margin: 0px 20px 30px 20px;
  display: flex;
  flex-direction: row;
`;

export const StyledNews = styled.div`
  ${({main}) => main ? `width : 65%` : `width : 35%`};
  display: flex;
  flex-direction: column;
  
  .card {
    background-color: ${colors.card_background};
    max-width: 800px;
    //border-radius: 10px;
    border-radius: 1px;
    padding: 15px;
    margin: 0px 40px 20px 0px;
    .subject {
      color: ${colors.card_title};
      align-items: center;
      font-size: 18px;
    }
    .date{
      ${colors.card_date};
      display: flex;
      align-items: center;
      height: 30px;
      font-size: 12px;
      font-weight: bold;
    }
    .content {
      ${colors.card_content};
      font-size: 14px;
      line-height: 25px;
      a {
        color: ${colors.card_url};
        text-decoration: none;
      }
    }
  }
`;

export const StyledPaginatedNews = styled.div`
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
    border-radius: 1px;
    color: white;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: ${colors.blue_background};
  }

  .paginationActive a {
    color: ${colors.blue_background};
    background-color: white;
  }

  .paginationDisabled a {
    display: none;
  }
`
