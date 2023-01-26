import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {BurgerNav, styles} from "../../../styles/StyledNavigation";
import {StyledLink} from "../../../styles/StyledLink";

const dropdownItems = (data) => data.map((x) => (
    <NavLink key={x.url} to={x.url}>{x.name}</NavLink>
));

const BurgerMenu = () => {

  const researchLinks = [
    { url: '/research', name: 'Research'}
  ];

  const publicationsLinks = [
    { url: '/publications', name: 'Publications'},
    { url: '/presentations', name: 'Presentations' }
  ];

  const resourceLinks = [
    { url: '/datasets', name: 'Datasets' },
    { url: '/equipments', name: 'Equipments' }
  ];

  const aboutLinks = [
    { url: '/people', name: 'People' },
    { url: '/collaborations', name: 'Collaborations' },
    { url: '/positions', name: 'Join Us' },
    { url: '/contact', name: 'Contact' },
  ];
  return (
      <BurgerNav>
        <Menu className="burger-menu" styles={styles} noOverlay right disableAutoFocus isOpen={false}>
          {dropdownItems(researchLinks)}
          {dropdownItems(publicationsLinks)}
          {dropdownItems(resourceLinks)}
          <StyledLink href="https://github.com/bhklab" target='_blank'>GitHub</StyledLink>
          <StyledLink href="https://bhklab.ca/" target='_blank'>Tools</StyledLink>
          {dropdownItems(aboutLinks)}
        </Menu>
      </BurgerNav>
  );
};

export default BurgerMenu;
