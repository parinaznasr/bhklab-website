import React from 'react';
import styled from 'styled-components';
// import logo from './bhklab-logo-white.png';
import logo from './bhklab-logo.png';
import BurgerMenu from "./BurgerMenu";
import {Link} from 'react-router-dom' ;
import colors from "../../../styles/colors";

const StyledNavigation = styled.div`
  /* The dropdown container */
  .dropdown {
    float: right;
    overflow: hidden;
    padding: 25px 0px;
  }

  /* Dropdown button */

  .dropdown .dropbtn .header-link {
    font-size: calc(0.8vw);
    border: none;
    outline: none;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 10px; /* Important for vertical align on mobile phones */
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .navbar a:hover, .dropdown:hover .dropbtn {
    color: ${colors.navbarLink}
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    margin-top: 22px;
    display: none;
    position: absolute;
    background-color: ${colors.white};
    width: 180px;
    border-radius: 1px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    margin: 0px;
    text-decoration: none;
    display: block;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;
    -o-transition: color 0.2s ease-out;
    transition: color 0.2s ease-out;
  }

  /* Add a grey background color to dropdown links on hover */

  .dropdown-content a:hover {
    background-color: #f1f0f0;
    //padding-left: 25px;
    border-radius: 1px;
    color: ${colors.navbarLink};
  }

  .dropdown-content a:active {
    background-color: ${colors.navbarLink};
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  position: fixed;
  width: 100%;
  height: 65px;
  background: ${colors.navbarBackground};
  z-index: 999;
  border-bottom: #d5d5d5;
  border-bottom-style: solid;
  border-width: 1px;

  a {
    color: ${colors.navbarText};
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  margin-left: 5vw;
  float:left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  & img {
    height: 50px;
  }
`;

const StyledLinks = styled.div`
  float:right;
  display: flex;
  flex-direction: row;
  margin-right: 10vw;
  & a {
    color: ${colors.navbarText}
    text-decoration: none;
    font-size: calc(0.2vw + 0.7em);
    margin: 0px 20px;
    letter-spacing: 1px;
    border-bottom: 2px solid transparent;
  }

  & a:hover {
    color: ${colors.navbarLink}
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;


const NavBar= () => (
    <StyledNavigation>
        <LogoContainer>
            <Link to="/"><img alt="logo" src={logo} /></Link>
        </LogoContainer>
        <BurgerMenu/>
        <StyledLinks className="header-links">
            <div className="dropdown" style={{ verticalAlign: 'middle'}}><a  href="/research">Research</a></div>
            <div className="dropdown">
                <a className="dropbtn">Publications</a>
                <div className="dropdown-content">
                    <Link to="/publications">Papers</Link>
                    <Link to="/presentations">Presentations</Link>
                </div>
            </div>
            <div className="dropdown">
                <a className="dropbtn">Resources</a>
                <div className="dropdown-content">
                    <Link to="/datasets">Datasets</Link>
                    <Link to="/equipments">Equipments</Link>
                </div>
            </div>
            <div className="dropdown" style={{ verticalAlign: 'middle'}}><a  href="/software">Software</a></div>
            <div className="dropdown">
                <Link className="dropbtn">About</Link>
                <div className="dropdown-content">
                    <Link to="/people">People</Link>
                    <Link to="/collaboration">Collaboration</Link>
                    <Link to="/positions">Join Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </StyledLinks>
    </StyledNavigation>
);

export default NavBar;
