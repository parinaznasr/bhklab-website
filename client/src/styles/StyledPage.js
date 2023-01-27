import styled from 'styled-components';
import colors from "./colors";

export const Container = styled.div`
  width: 100%;
  margin: 0px 20px;
  display: flex;
  text-align: justify;
  flex-direction: column;
`;

export const StyledCard = styled.div`

  display: flex;
  text-align: justify;
  flex-direction: row;

  img {
    max-height: 100vh;
    padding: 0px;
    position: sticky;
  }

  .subject {
    padding: 0px 15vw 10px 15vw;
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 20px;
    font-weight: normal;
  }

  .subtitle {
    padding: 0px 15vw 10px 15vw;
    font-size: 16px;
    font-weight: bold;

    a {
      color: ${colors.navbarLink}
    }
  }


  .content {
    padding: 0px 15vw 30px 15vw;
    font-size: 15px;
    line-height: 25px;
    font-weight: normal;
  }

  img {
    padding-right: 0;
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  :nth-child(odd) {
    background-color: white;
    color: black;
    align-content: flex-start;
    padding-right: 0;

  }

  :nth-child(even) {
    color: black;
    background-color: #bf1919;
    align-content: flex-end;
    padding-right: 0;

  }
`

export const StyledPage = styled.div`
  width: 100%;
  nth-child(2) {
    background-color: white;
  }
  .subject {
    color: black;
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 20px;
    font-weight: normal;
    margin-top: 30px;
  }
  .date{
    color: ${colors.light_gray};
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    font-weight: normal;
  }
  .content {
    font-size: 15px;
    line-height: 25px;
    font-weight: normal;
    width: 75%;
    color: ${colors.gray_text};
  }
  .divider {
    margin-bottom: 30px;
    padding-top: 10px;
  }
`
