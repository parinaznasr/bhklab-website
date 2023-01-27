import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const StyledFooter = styled.div`
  width: 100%;
  border-top: #d5d5d5;
  border-top-width: 1px;
  border-top-style: solid;
  bottom:0px;
  right:0px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  white-space:nowrap;
  font-size: calc(0.8em + 0.2vw);
  height: 120px;
  align-items: center;
  justify-content: center;
  color: black;

  .logo {
    float:left;

    & img {
      width: 90px;
      margin-right:10px;
    }
  }


  .links {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & * {
      flex-basis: 33%;
      color: black;
      font-size: calc(0.2vw + 0.8em);
      margin: 5px 0px;
      letter-spacing: 0px;
      font-family: 'Lato', sans-serif;
    }
  }

  .links a:hover {
    color: ${colors.navbarLink};
  }

  .link-container {
    display:flex;
    margin: 0px 50px;
    align-items:flex-start;
    flex-direction: column;
  }
`


const Footer = () => {
    return (
        <StyledFooter>
            <div className="links">
                <div className="link-container">
                    <a href="/research">Research</a>
                    <a href="/collaboration">Collaboration</a>
                    <a href="/software">Software</a>
                </div>

                <div className="link-container">
                    <a href="/publications">Publications</a>
                    <a href="/presentations">Presentations</a>
                </div>

                <div className="link-container">
                    <a href="/resources">Resources</a>
                    <a href="/datasets">Datasets</a>
                </div>

                <div className="link-container">
                    <a href="/contact">Contact Us</a>
                    <a href="/positions">Join Us</a>
                    <a href="/people">People</a>
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;
