import React from 'react';
import { BoxInfos, BoxTitle, ContainerInfos, BoxSubTitle } from './styledComponents';
import { LINKS } from '../../../../../enums/links';
import { displayLink } from './utils';

const Aides = () => {
  return (
    <ContainerInfos>
      <BoxInfos>
        <BoxTitle>Addons PvP</BoxTitle>
        <hr />
        <BoxSubTitle>
          Vous trouverez ici les addons de base pour PvP sans se faire de...cer
        </BoxSubTitle>
        {displayLink(LINKS.PVP)}
      </BoxInfos>
      <BoxInfos>
        <BoxTitle>Guide Généraux</BoxTitle>
        <hr />
        <BoxSubTitle>
          Site internet pour trouver les renseignement necessaire a toute vos activité
        </BoxSubTitle>
        {displayLink(LINKS.PVP)}
      </BoxInfos>
      <BoxInfos>
        <BoxTitle>Guide Généraux</BoxTitle>
        <hr />
        <BoxSubTitle>
          Site internet pour trouver les renseignement necessaire a toute vos activité
        </BoxSubTitle>
        {displayLink(LINKS.PVP)}
      </BoxInfos>
      <BoxInfos>
        <BoxTitle>Guide Généraux</BoxTitle>
        <hr />
        <BoxSubTitle>
          Site internet pour trouver les renseignement necessaire a toute vos activité
        </BoxSubTitle>
        {displayLink(LINKS.PVP)}
      </BoxInfos>
    </ContainerInfos>
  );
};

export default Aides;
