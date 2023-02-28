import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import {ResearchCard} from "../../Components/Utils/CustomCard";


const StyledSection = styled.div`
  border-top-color: #e0e0e0;
  border-top-style: solid;
  border-top-width: 1px;

  min-height: 280px;

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #000000;
    text-align: center;
  }

  .container {
    width: 100%;
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .box {
    background-color: white;
    flex-basis: 22%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    //align-items: center;
    text-align: center;
    padding: 10px 5px 10px 5px;
    margin: 10px 30px;
    min-height: 240px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
    line-height: 120%;

    .title {
      font-weight: bold;
      font-size: 14px;
      height: 40px;
      color: ${colors.header_deep_blue};
    }

    .description {
      height: 200px;
      
      ul {
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
      }
    }

    a {
      color: #2A2A2AFF;
      transition: 0.3s;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px 5px;
    }


    a:hover {
      transition: 0.3s;
    }

    & img {
      height: 45px;
      max-width: 60px;
      object-fit: scale-down;
    }

    & span {
      margin-top: 20px;
      font-size: 14px;
      font-weight: normal;
      color: #575757;
    }

    & a:hover {
      color: #d5d5d5;
    }
  }
`;


export const ResearchTopics = () => {
    return (
        <StyledSection>
            <h1>Research Teams</h1>
            <div className="container">
                <ResearchCard
                    title = "Pharmacogenomics"
                    description= {
                        <ul>
                            <li>Integration of preclinical/clinical data</li>
                            <li>Drug classification/repurposing</li>
                        </ul>
                    }
                    image="./images/projects/biomarker.png"
                />
                <ResearchCard
                    title = "Radiomics"
                    description= {
                        <ul>
                            <li>Segmentation/Deduction</li>
                            <li>Radiomics for prognosis and prediction</li>
                            <li>Validation using clinical radiogenomics</li>
                        </ul>
                    }
                    image="./images/projects/segmentation_liver.png"
                />
                <ResearchCard
                    title = "Software Development"
                    description= {
                        <ul>
                            <li>Software</li>
                            <li>Packages</li>
                            <li>Eco-systems</li>
                        </ul>
                    }
                    image="./images/projects/software.png"
                />
            </div>
        </StyledSection>
    )
}
