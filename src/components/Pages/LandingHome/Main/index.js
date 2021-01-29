import React from 'react';

import { ContainerLandingHomeMain } from './styledComponents';

import { LINKS } from '../../../../../enums/links';
import Aides from '../Aides';
import Accueil from '../Accueil';

const LandingHomeMain = ({ pageShow }) => {
  return (
    <ContainerLandingHomeMain>
      {pageShow === LINKS.NAVBAR.ACCUEIL && <Accueil />}
      {pageShow === LINKS.NAVBAR.AIDE && <Aides />}
    </ContainerLandingHomeMain>
  );
};
export default LandingHomeMain;
