import styled from "styled-components";
import colors from "../../../../styles/colors";

export const StyledDataset = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  .subject {
    color: black;
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 20px;
    font-weight: normal;
    margin-top: 30px;
  }

  .date {
    color: black;
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    font-weight: normal;
  }

  .content {
    flex-wrap: wrap;
    font-size: 14px;
    line-height: 25px;
    font-weight: normal;
    width: 75%;
    color: black;

    a {
      color: ${colors.navbarLink};
      text-decoration: none;
    }
  }
  .divider {
    margin-bottom: 30px;
    padding-top: 10px;
  }
`;

export const Container = styled.div`
  width: 80%;
  color: black;
  max-width: 1500px;
  padding-bottom: 30px;
  margin: 0px 20px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
