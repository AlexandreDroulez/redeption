import React from 'react';
import { LINKS } from '../../../../../enums/links';
import {
  ContainerAllIcon,
  ContainerIcon,
  ContainerLandingHomeLeft,
  ContainerLandingHomeMain,
  ContainerLandingHomeRight,
  Flag,
  Icon,
  MainTitleRight,
  TextForIcon,
  TitleBanner,
  TitleVideo,
} from '../Main/styledComponents';
import flag from '../../../../../assets/baniere_gris_nhil.png';
import iconDiscord from '../../../../../assets/discord.png';
import iconCommunnity from '../../../../../assets/logo_commu_nhil.png';
import iconWow from '../../../../../assets/Logo_wow_nhil.png';
import CarouselImage from '../Carousel';

const Accueil = () => {
  return (
    <>
      <ContainerLandingHomeLeft>
        <Flag src={flag} />
        <ContainerAllIcon>
          <TitleBanner>Plus qu&apos;une Guilde ?</TitleBanner>
          <ContainerIcon>
            <Icon src={iconDiscord} />
            <TextForIcon>Discord</TextForIcon>
          </ContainerIcon>
          <ContainerIcon>
            <Icon src={iconCommunnity} />
            <TextForIcon>Commumaute</TextForIcon>
          </ContainerIcon>
          <ContainerIcon>
            <Icon src={iconWow} />
            <TextForIcon>Jeux</TextForIcon>
          </ContainerIcon>
        </ContainerAllIcon>
      </ContainerLandingHomeLeft>
      <ContainerLandingHomeRight>
        <MainTitleRight>BIENVENUE VOYAGEUR</MainTitleRight>
        <div>
          La guilde redemption est composée de combatants et combatantes de la HORDE depuis des
          temps anciens ...
        </div>
        <div>
          Reconstruite pour l&apos;arrivée de Shadowland nous sommes une guilde essentiellement PvP
          ayant a coeur de faire progresser et d&apos;aider ces membres maiis aussi de progresser
          avec ca copmmunauté
        </div>
      </ContainerLandingHomeRight>
      <TitleVideo>Quelques images</TitleVideo>
      <CarouselImage />
    </>
  );
};

export default Accueil;
