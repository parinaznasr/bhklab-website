import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 5px;
  margin: 5px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px;
  text-align: center;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  margin: 10px 20px;
  text-align: center;
`;


export const ResearchCard = ({ title, description, image }) => {
    return (
        <StyledCard>
            <StyledImage src={image} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
        </StyledCard>
    );
};
