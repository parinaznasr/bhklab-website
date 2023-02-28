import Layout from '../../Components/Utils/Layout';
import React from 'react';
import styled from "styled-components";
import research from './research.json';
import "animate.css/animate.min.css";
import colors from "../../styles/colors";
import {ResearchCard} from "../../Components/Utils/CustomCard";
// import {StyledCard, StyledDescription, StyledImage, StyledTitle} from '../../../styles/StyledCard';

// import styled from "styled-components";

// const StyledCard = styled.div`
//   width: 300px;
//   height: 400px;
//   border: 1px solid gray;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// `;
//
// const StyledImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;
//
// const StyledTitle = styled.h2`
//   font-size: 16px;
//   font-weight: bold;
//   margin: 10px 20px;
//   text-align: center;
// `;
//
// const StyledDescription = styled.p`
//   font-size: 14px;
//   margin: 10px 20px;
//   text-align: center;
// `;
//
//
// const ResearchTopicCard = ({ title, description, imageUrl }) => {
//     return (
//         <StyledCard>
//             <StyledImage src={imageUrl} alt={title} />
//             <StyledTitle>{title}</StyledTitle>
//             <StyledDescription>{description}</StyledDescription>
//         </StyledCard>
//     );
// };


const StyledSection = styled.div`
  padding-top: 60px;
  h1 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #000000;
    text-align: center;
  }

  .container {
    margin: 50px;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  .inner {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
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
    min-height: 120px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.3);
    line-height: 120%;

    .title {
      font-weight: bold;
      font-size: 12px;
      height: 40px;
      color: ${colors.navbarLink};
    }

    .description {
      height: 150px;
      
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
    }

    & span {
      margin-top: 20px;
      font-size: 12px;
      font-weight: normal;
      color: #575757;
    }

    & a:hover {
      color: #d5d5d5;
    }
  }
`;


const Research = () => {
    return (
        <Layout>
        <StyledSection>
            <h1>Pharmacogenomics</h1>
            <div className="container">
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Integration of preclinical/clinical data"
                    description="Hi1"
                    image="./images/projects/biomarker.png"
                />
                <ResearchCard
                    path = "/research/segmentation"
                    title = "Drug classification/repurposing"
                    description="Hi2"
                    image="./images/projects/segmentation_liver.png"
                />
            </div>
            <h1>Radiomics</h1>
            <div className="container">
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Segmentation/Deduction"
                    description="Integration of preclinical/clinical data"
                    image="./images/projects/biomarker.png"
                />
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Radiomics for prognosis and prediction"
                    description="list"
                    image="./images/projects/segmentation_liver.png"
                />
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Validation using clinical radiogenomics"
                    description="Integration of preclinical/clinical data"
                    image="./images/projects/software.png"
                />
            </div>
            <h1>Software Development</h1>
            <div className="container">
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Software"
                    description=""
                    image="./images/projects/biomarker.png"
                />
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Package"
                    description=""
                    image="./images/projects/segmentation_liver.png"
                />
                <ResearchCard
                    path = "/research/biomarker-discovery"
                    title = "Eco-system"
                    description=""
                    image="./images/projects/segmentation_liver.png"
                />
            </div>
        </StyledSection>
        </Layout>
    )
}

export default Research;