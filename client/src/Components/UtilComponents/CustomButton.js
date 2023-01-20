import React from 'react';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const StyledButton = styled(Button)`
  .p-button-label {
    font-size: ${props => props.fontSize ? props.fontSize : '10px'};
  }
  .pi {
    font-size: ${props => props.fontSize ? props.fontSize : '10px'};
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
