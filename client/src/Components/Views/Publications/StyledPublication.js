import styled from "styled-components";
import colors from "../../../styles/colors";

const StyledPublication = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: row;

  .p-timeline-event-opposite {
    display: none;
  }

  .p-card-title {
    font-size: 16px;
  }

  .p-card-subtitle {
    font-size: 14px;
  }

  .p-card-content {
    padding: 0px;
  }

  .p-avatar-group {
    margin-buttom: 0px;
  }

  .p-card {
    width: 80%;
    border-style: none;
  }

  .p-card:hover {
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    border-color: lightgray;
    border-width: 1px;
    border-style: solid;
    background-color: white;
  }

  .event-title {
    font-size: 14px;
    margin: 0px 0px 5px 0px;
  }

  .pi-circle-fill {
    color: ${colors.navbarLink};
  }

  #p-card-subtitle {
    color: ${colors.gray_text};
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    font-weight: normal;
  }

  #content {
    font-size: 14px;
    line-height: 25px;
    font-weight: normal;
    width: 75%;
    color: ${colors.gray_text};
  }

  #p-timeline-event-opposite {
    width: 0px;
  }

  .p-timeline-event-connector {
    background-color: #e82222;
  }

  .p-timeline-event-separator {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${colors.navbarLink}
  }
`;

const StyledCard =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .column {
    flex-direction: column;
  }
`

const Container = styled.div`
  
`;


export {
    StyledCard,
    StyledPublication,
    Container
};
