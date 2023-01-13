import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0px 20px 0px 200px;
  display: flex;
  flex: 1 1 24%;
  flex-direction: column;
  text-align: center;
  .header {
    font-size:calc(0.6vw + 0.8em);
    font-weight: bold;
    margin : 100px 0px 20px 0px;
  }
`;

export const StyledMember = styled.div`
  display: flex;
  flex-direction: row;
  img {
    border-radius: 2px;
    width: 300px;
    height: auto;
    object-fit: cover;
  }
  .desc {
    .name {
      font-size:calc(0.3vw + 0.6em);
      font-weight: bold;
    }
    color: black;
    line-height: 25px;
    margin-left: 20px;
    padding: 0px 10px;
    width: 60%;
    text-align: justify;
  }
  .social-logo {
  }
`;
