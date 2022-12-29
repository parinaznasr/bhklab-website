import React from 'react';
import { Button } from 'primereact/button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  padding: 10px;
  background-color: rgba(76, 110, 134, 0.1);
  border-style: solid;
  border-color: ghostwhite;
  width: 50px;
  .p-button-label {
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  }

  .pi {
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
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
