import styled from "styled-components";


export const Card = styled.div`
  width: 90%;
  margin: 0px 20px 0px 200px;
  display: flex;
  flex: 1 1 24%;
  border-color: #e2e2e2;
  padding: 10px;
  margin: 20px 30px;
  border-style: solid;
  flex-direction: column;
  text-align: left;

  .title {
    font-size: calc(0.6vw + 0.8em);
    font-weight: bold;
    margin: 100px 0px 20px 0px;
  }

  .qualifications {
    font-size: calc(0.6vw + 0.8em);
    font-weight: bold;
    margin: 100px 0px 20px 0px;
  }
  .button {
    
  }
`;

const StyledPosition = (props) => {
    const {position} = props;
    return(
        <Card>
            <div>{position.title}</div>
            <div>{position.description}</div>
            <div>{position.duties? position.duties : ''}</div>
        </Card>
    )
}

export default StyledPosition;
