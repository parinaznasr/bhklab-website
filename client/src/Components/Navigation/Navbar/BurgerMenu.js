import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {BurgerNav} from "./StyledBurgerMenu";
import colors from '../../../styles/colors';
import styled from "styled-components";

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '27px',
    height: '20px',
    right: '10vw',
    top: '15px',
  },
  bmBurgerBars: {
    background: `${colors.white}`,
    borderRadius: '3px',
    opacity: 0.8,
    height: '3px',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    backgroundColor: `${colors.white}`,
  },
  bmMenuWrap: {
    position: 'fixed',
  },
  bmMenu: {
    // backgroundColor: 'rgba(27,94,235,0.95)',
    backgroundColor: 'rgb(145,170,211)',
    padding: '0.5em 1.5em 0',
    fontSize: '16px',
  },
  bmItemList: {
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    color: `${colors.gray_light}`
  },
  bmItem: {
    color: 'white',
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const dropdownItems = (data) => data.map((x) => (
    <NavLink key={x.url} to={x.url}>{x.name}</NavLink>
));


const StyledExternalLink = styled.a`
  target:'_blank';
  color: ${colors.white};
  //&:hover {
  //  padding-left: 15px;
  //};
`;

// research dropdown options
const researchLinks = [
  { url: '/research', name: 'Research'}
];

// publications dropdown options
const publicationsLinks = [
  { url: '/publications', name: 'Publications'}
];

// news dropdown options
const newsLinks = [
  { url: '/news', name: 'News'}
];

// research dropdown options
const resourceLinks = [
  { url: '/datasets', name: 'Datasets' },
  // { url: '/research', name: 'Research' },
  // { url: '/publications', name: 'Publications' },
  // { url: '/resources', name: 'Resources' },
  { url: '/equipments', name: 'Equipments' },
  { url: '/presentations', name: 'Presentations' }
];

// software dropdown options
const softwareLinks = [
  { url: 'https://github.com', name: 'Github' },
  { url: 'https://www.bhklab.ca', name: 'Tools' }
];

// about dropdown options
const aboutLinks = [
  { url: '/people', name: 'People' },
  { url: '/positions', name: 'Positions' },
  { url: '/contact', name: 'Contact' },
  // { url: '/social', name: 'Social' }
];

const BurgerMenu = () => {

  return (
      <BurgerNav>
        <Menu className="burger-menu" styles={styles} noOverlay right disableAutoFocus isOpen={false}>
          {/*{dropdownItems(newsLinks)}*/}
          {dropdownItems(researchLinks)}
          {dropdownItems(publicationsLinks)}
          {dropdownItems(resourceLinks)}
          {/*<h4>SOFTWARE</h4>*/}
          <StyledExternalLink href="https://github.com/bhklab" target='_blank'>GitHub</StyledExternalLink>
          <StyledExternalLink href="https://bhklab.ca/" target='_blank'>Tools</StyledExternalLink>
          {/*<h4>ABOUT</h4>*/}
          {dropdownItems(aboutLinks)}
        </Menu>
      </BurgerNav>
  );
};

export default BurgerMenu;
