import styled from "styled-components";
import CustomButton from "../../../UtilComponents/CustomButton";
import {StyledLink} from "../../../../styles/StyledLink";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Layout from "../../../UtilComponents/Layout";
import { Dialog } from 'primereact/dialog';

export const Card = styled.div`
  width: 60%;
  display: flex;
  flex: 1 1 24%;
  border-color: #e2e2e2;
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
  padding: 30px 30px 20px 30px;
  margin: 20px 30px;
  border-style: solid;
  flex-direction: column;
  text-align: left;

  .title {
    font-size: 24px;
    color: black;
    font-weight: bold;
    margin: 10px 0px 20px 0px;
  }

  .qualifications {
    font-size: calc(0.6vw + 0.8em);
    font-weight: bold;
    margin: 100px 0px 20px 0px;
  }
  .button {
    
  }
  :hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Position = (props) => {
    const params = useParams();
    console.log("!!",params)
    const [position, setPosition] = useState({data: {}, ready: false});
    const {token} = params;
    return(
        <Layout>
            <Card>
                {params.token}
            </Card>
        </Layout>
    )
}

export default Position;
