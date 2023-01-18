import styled from "styled-components";
import CustomButton from "../../../UtilComponents/CustomButton";
import { useState} from "react";
import {StyledLink} from "../../../../styles/StyledLink";


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


const footer = (
    <div>
        <CustomButton label="Yes" icon="pi pi-check" onClick={'displayBasic'} />
        <CustomButton label="No" icon="pi pi-times" onClick={'displayBasic'} />
    </div>
);

const myIcon = (
        <button className="p-dialog-titlebar-icon p-link">
            <span className="pi pi-search"></span>
        </button>
    )


const StyledPosition = (props) => {
    const {position} = props;
    const [display, setDisplay] = useState(false)

    return(
        <Card>
            <div className="title">{position.title}</div>
            <div>{position.description}</div>
            <div>{position.duties? position.duties : ''}</div>
            {
                display &&
                <div>More info More info More info More info</div>
            }
            <span style={{display:'flex', justifyContent:'flex-end'}}>
                <CustomButton
                    label="Read more (this?)"
                    className="p-button-text p-button-rounded"
                    icon="pi p-button-secondary"
                    iconPos="right"
                    onClick={() => setDisplay(!display)}
                />
            </span>

            <StyledLink to={{pathname: `${position.title.toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'')}`}}
                        target='_blank'>
                <span style={{display:'flex', justifyContent:'flex-end'}}>
                    <CustomButton
                        label="Read more (or this?)"
                        className="p-button-text p-button-rounded"
                        icon="pi p-button-secondary"
                        iconPos="right">
                        onClick={() => setDisplay(!display)}
                    </CustomButton>
                </span>
            </StyledLink>
        </Card>
    )
}

export default StyledPosition;
