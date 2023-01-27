import Layout from '../../UtilComponents/Layout';
import React from 'react';
import styled from "styled-components";
import research from './research.json';
import "animate.css/animate.min.css";
import HyperLink from "../../UtilComponents/HyperLink";
import colors from "../../../styles/colors";

const StyledSection = styled.div`

  h1 {
    font-size: 30px;
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
      font-size: 20px;
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
      font-size: 20px;
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
                <div className="box">
                    <a href="/research/biomarker-discovery">
                        <span className="title">Integration of preclinical/clinical data</span>
                        <img alt="transition" src={'./images/projects/biomarker.png'}/>
                        <span className="description">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/segmentation">
                        <span className="title">Drug classification/repurposing</span>
                        <img alt="transition" src={'./images/projects/segmentation_liver.png'}/>
                        <span className="description">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                    </span>
                    </a>
                </div>
            </div>
            <h1>Radiomics</h1>
            <div className="container">
                <div className="box">
                    <a href="/research/biomarker-discovery">
                        <span className="title">Segmentation/Deduction</span>
                        <img alt="transition" src={'./images/projects/biomarker.png'}/>
                        <span className="description">
                            <ul>
                                <li>Integration of preclinical/clinical data</li>
                            </ul>
                        </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/segmentation">
                        <span className="title">Radiomics for prognosis and prediction</span>
                        <img alt="transition" src={'./images/projects/segmentation_liver.png'}/>
                        <span className="description">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                    </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/software">

                        <span className="title">Validation using clinical radiogenomics</span>
                        <img alt="transition" src={'./images/projects/software.png'}/>
                        <span className="description">
                            <ul>

                            </ul>
                    </span>
                    </a>
                </div>
            </div>
            <h1>Software Development</h1>
            <div className="container">
                <div className="box">
                    <a href="/research/biomarker-discovery">
                        <span className="title">Software</span>
                        <img alt="transition" src={'./images/projects/biomarker.png'}/>
                        <span className="description">
                            <ul>
                                <li>Description 1</li>
                                <li>Description 2</li>
                            </ul>
                        </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/research/segmentation">
                        <span className="title">Package</span>
                        <img alt="transition" src={'./images/projects/segmentation_liver.png'}/>
                        <span className="description">
                            <ul>
                                <li>Description 1</li>
                                <li>Description 1</li>
                            </ul>
                    </span>
                    </a>
                </div>
                <div className="box">
                    <a href="/software">

                        <span className="title">Eco-system</span>
                        <img alt="transition" src={'./images/projects/software.png'}/>
                        <span className="description">
                            <ul>
                                <li>Meta-webapp</li>
                            </ul>
                    </span>
                    </a>
                </div>
            </div>
        </StyledSection>
        </Layout>
    )
}

export default Research;
