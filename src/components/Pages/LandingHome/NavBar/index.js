import React from 'react';

import {
  ContainerLandingHomeNavBar,
  GuildName,
  GuildPreferences,
  Logo,
  TransparenteContainer,
  ContainerLink,
  StyledLink,
} from './styledComponents';
import logo from '../../../../../assets/redemption.png';
import { LINKS } from '../../../../../enums/links';
import { displayNavbarLink } from './utils';

const LandingHomeNavbar = ({ pageShow, setPageShow }) => {
  return (
    <ContainerLandingHomeNavBar>
      <div onClick={() => setPageShow(LINKS.NAVBAR.ACCUEIL)}>
        <Logo src={logo} alt="accueil" />
      </div>
      <GuildName>RedemptïØn</GuildName>
      <TransparenteContainer>
        <GuildPreferences>Guilde PvP / RBG / ARENE</GuildPreferences>
        <ContainerLink>{displayNavbarLink(LINKS.NAVBAR, pageShow, setPageShow)}</ContainerLink>
      </TransparenteContainer>
    </ContainerLandingHomeNavBar>
  );
};

export default LandingHomeNavbar;
