import styled from "styled-components";
import { useState} from "react";
import { Markup } from 'interweave';
import { Divider } from 'primereact/divider';
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import CustomButton from "../../../UtilComponents/CustomButton";
import colors from "../../../../styles/colors";

export const Card = styled.div`
  width: 60%;
  padding: 30px 30px 20px 30px;
  margin: 20px 30px;
  display: flex;
  flex: 1 1 24%;
  flex-direction: column;
  text-align: left;
  line-height: 25px;
  border-color: #e2e2e2;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);

  .title {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }

  .subtitle {
    margin: 15px 0px 10px 0px;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
    color: ${colors.navbarLink};
  }

  .icon {
    font-size : 14px;
    display: flex;
  }
  
  .divider {
    padding-top: 1px;
  }
  
  :hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
  }
`;

const StyledDivider = () => {
    return <Divider className='divider' style={{ backgroundColor : `${colors.gray_divider}`}}/>
}

const StyledContent = (props) => {
    const {title, content} = props;
    return (
        <>
            <StyledDivider/>
            <div className="subtitle">{title}:</div>
            <Markup content={content}/>
        </>
    )
}


const StyledPosition = (props) => {
    const {title, description, responsibilities, req_qualifications, pref_qualifications, apply} = props.position;
    const [display, setDisplay] = useState(false);
    return(
        <Card>
            <div className="title">{title}</div>
            <Markup content={description}/>
            {
                display &&
                    <>
                        {
                            responsibilities && <StyledContent title={"Responsibilities"} content={responsibilities}/>
                        }
                        {
                            req_qualifications && <StyledContent title={"Required qualifications"} content={req_qualifications}/>
                        }
                        {
                            pref_qualifications && <StyledContent title={"Preferred qualifications"} content={pref_qualifications}/>
                        }
                        {
                            apply &&<StyledContent title={"How to apply"} content={apply}/>
                        }
                    </>
            }
            <>
                {
                    ( responsibilities || req_qualifications || pref_qualifications || apply) &&
                    <span style={{display:'flex', justifyContent:'flex-end'}}>
                        <CustomButton
                            label= {display? <FaAngleUp className="icon"/>: <FaAngleDown className="icon"/> }
                            className="p-button-text p-button-rounded"
                            icon={"pi p-button-secondary"}
                            iconPos="right"
                            onClick={() => setDisplay(!display)}
                        />
                    </span>
                }
            </>
        </Card>
    )
}

export default StyledPosition;
