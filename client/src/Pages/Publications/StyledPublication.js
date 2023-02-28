import styled from "styled-components";
import colors from "../../styles/colors";


const StyledPublicationCard =  styled.div`
  border-radius: 4px;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  background-color: ${colors.white};
  margin: 0 0 10px 0;
  font-size: 12px;
  color: var(--primary);
`

const Container = styled.div`
  
`;


export {
    StyledPublicationCard,
    Container
};
