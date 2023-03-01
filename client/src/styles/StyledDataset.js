import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
  width: 80%;
  color: black;
  max-width: 1500px;
  padding-bottom: 30px;
  margin: 0px 20px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;

  .text {
    display: flex;
    justify-content: center;
    color: black;
  }
`;
