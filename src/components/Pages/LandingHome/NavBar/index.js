import React from 'react';
import Link from 'next/link';
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

const LandingHomeNavbar = () => {
  return (
    <ContainerLandingHomeNavBar>
      <Logo src={logo} />
      <GuildName>RedemptïØn</GuildName>
      <TransparenteContainer>
        <GuildPreferences>Guilde PvP / RBG / ARENE</GuildPreferences>
        <ContainerLink>
          <Link href="/accueil">
            <StyledLink>Accueil</StyledLink>
          </Link>
          <Link href="/infos">
            <StyledLink>Infos</StyledLink>
          </Link>
        </ContainerLink>
      </TransparenteContainer>
    </ContainerLandingHomeNavBar>
  );
};

export default LandingHomeNavbar;
