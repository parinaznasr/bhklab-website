import styled from "styled-components";
import { useState} from "react";
import { Markup } from 'interweave';
import { Divider } from 'primereact/divider';
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import CustomButton from "../../../Components/Utils/CustomButton";
import colors from "../../../styles/colors";

const StyledCard = styled.div`
  width: 60%;
  padding: 20px 30px 10px 30px;
  margin: 20px 10px;
  display: flex;
  flex: 1 1 24%;
  flex-direction: column;
  text-align: left;
  line-height: 25px;
  background-color: ${colors.white};
  color: ${colors.text_black};
  border-color: ${colors.white};
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);

  .title {
    color: ${colors.text_black};
    font-size: 14px;
    font-weight: bold;
  }

  .subtitle {
    margin: 15px 0px 10px 0px;
    color: ${colors.text_black};
    font-size: 12px;
    font-weight: bold;
  }

  a {
    color: ${colors.header_deep_blue};
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

const StyledDivider = styled(Divider)`
  background-color: ${colors.gray_divider};
`;

const StyledContent = ({ title, content }) => (
    <>
        <StyledDivider />
        <div className="subtitle">{title}:</div>
        <Markup content={content} />
    </>
);

const StyledPosition = ({ position }) => {
    const {
        title,
        description,
        responsibilities,
        req_qualifications,
        pref_qualifications,
        apply,
    } = position;
    const [display, setDisplay] = useState(false);
    return (
        <StyledCard>
            <div className="title">{title}</div>
            <Markup content={description} />
            {display && (
                <>
                    {responsibilities && <StyledContent title="Responsibilities" content={responsibilities} />}
                    {req_qualifications && (<StyledContent title="Required qualifications" content={req_qualifications} />)}
                    {pref_qualifications && (<StyledContent title="Preferred qualifications" content={pref_qualifications} />)}
                    {apply && (<StyledContent title="How to apply" content={apply} />)}
                </>)
            }
            {
                ( responsibilities || req_qualifications || pref_qualifications || apply) &&
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <CustomButton
                        className="p-button-text p-button-rounded"
                        icon={display ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
                        onClick={() => setDisplay(!display)}
                    />
                </div>
            }
        </StyledCard>
    )
}

export default StyledPosition;
