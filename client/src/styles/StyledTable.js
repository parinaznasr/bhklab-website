import styled from 'styled-components';

export const StyledTable = styled.table`
  margin-top: 100px;
  width: 70%;
  min-width: 550px;
  border-collapse: collapse;

  thead {
    width: 100%;
    padding: 40px 40px;
  }
  td {
    text-align: left;
    padding: 20px 0px;
    font-size: 12px;
  }
  
  th {
    text-align: left;
    padding: 20px 20px;
    font-size: 12px;
  }

  tr {
    border-bottom: 1px solid #a8a8a8;
  }

  .center {
    text-align: center;
  }
`;


// import styled from 'styled-components';
//
// const StyledTable = styled.div`
//   width: 80%;
//   //display: flex;
//   //flex: 1;
//   //align-items: center;
//   ////flex-direction: column;
//   //justify-content: center;
//   //align-items: center;
//   border-radius: 5px;
//   background-color: #36363f;
//   color: #dcdcdc;
//
//   .arrow {
//     width: 5px !important;
//     margin-left: 20px;
//     margin-top: 7px;
//     position: relative;
//     float: right;
//   }
//
//   .heading {
//     color: #c1c1c1;
//     background-color: rgba(255, 255, 255, 0);
//     text-align: left;
//     display: flex;
//     flex-direction: row;
//     padding-left: 0px;
//   }
//
//   Link {
//     color: #c1c1c1;;
//   }
// `;
//
// export default StyledTable;
