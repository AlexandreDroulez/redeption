import React from 'react';
import { ContainerLandingHome } from './styledComponents';
import LandingHomeNavBar from './NavBar';
import LandingHomeMain from './Main';

const LandingHome = () => {
  return (
    <ContainerLandingHome>
      <LandingHomeNavBar />
      <LandingHomeMain />
    </ContainerLandingHome>
  );
};

export default LandingHome;
