import React from 'react';
import { Button } from 'primereact/button';
import styled from 'styled-components';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import colors from "../../styles/colors";

const StyledButton = styled(Button)`
  background: #1aac83;
  border: 0;
  width: 80px;
  color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  .p-button-label {
    font-size: ${props => props.fontSize ? props.fontSize : '10px'};
  }
  .pi {
    font-size: ${props => props.fontSize ? props.fontSize : '10px'};
  }
  .icon{
    color: ${colors.header_deep_blue};
  }
`;

const CustomButton = (props) => {
    const {label, icon, onClick, className, disabled, tooltip, fontSize} = props;

    return(
        <StyledButton
            label={label}
            icon={icon}
            onClick={onClick}
            className={className}
            disabled={disabled}
            tooltip={tooltip}
            tooltipOptions={{disabled: false, position: 'bottom'}}
            fontSize={fontSize}
        />
    );
}

export default CustomButton;
