import React, { useState } from 'react';
import { ContainerLandingHome } from './styledComponents';
import LandingHomeNavBar from './NavBar';
import LandingHomeMain from './Main';
import { LINKS } from '../../../../enums/links';

const LandingHome = () => {
  const [pageShow, setPageShow] = useState(LINKS.NAVBAR.ACCUEIL);
  return (
    <ContainerLandingHome>
      <LandingHomeNavBar pageShow={pageShow} setPageShow={setPageShow} />
      <LandingHomeMain pageShow={pageShow} />
    </ContainerLandingHome>
  );
};

export default LandingHome;
