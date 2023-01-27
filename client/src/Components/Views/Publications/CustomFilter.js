import React from "react";
import styled from "styled-components";

const FilterElement = styled.div`
  display: flex;
  margin-right: 20px;
  width: 20%;
  align-items: flex-start;
  flex-direction: column;
  .label {
    font-size: 12px;
    margin-right: 10px;
  }
  .dropdown-pipelines {
    width: 250px;
  }
`;


export {
    FilterElement
};
