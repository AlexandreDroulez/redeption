import styled, { keyframes } from 'styled-components';
import wallPapers from '../../../../../assets/jpeg/thumb-1920-1092358.jpg';
import { deviceMedia } from '../../../../../styles/helper';

export const ContainerLandingHomeNavBar = styled.div`
  height: 100vh;
  background-image: url(${wallPapers});
  background-position: top;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
export const KeyframeGuildeName = keyframes`
  0% {
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.2);
  }
  85% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.0);
  }
`;
export const GuildName = styled.h1`
  color: ${props => props.theme.palette.white};
  font-size: 5rem;
  margin: 0 1rem;
  animation: ${KeyframeGuildeName} 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  ${deviceMedia.tablet`
     font-size: 3rem;
  `}
  ${deviceMedia.phone`
     font-size: 2rem;
  `}
`;

export const GuildPreferences = styled.h2`
  color: ${props => props.theme.palette.white};
  font-size: 1rem;
  margin: 0;
  ${deviceMedia.tablet`
     width: 100%;
  `}
  ${deviceMedia.phone`
     margin: 1rem 0;
  `}
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
  margin: 1rem auto;
  transition: 0.5s;
  ${deviceMedia.tablet`
     width: 75px;
  `}
    :hover {
    transform: scale(1.5);
  }
`;

export const TransparenteContainer = styled.div`
  position: relative;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: black;
  opacity: 0.6;
  color: ${props => props.theme.palette.white};
  ${deviceMedia.phone`
     padding:0;
  `}
`;

export const ContainerLink = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: auto 0;
  ${deviceMedia.tablet`
     margin: 1rem auto;
  `}
  ${deviceMedia.phone`
     margin: auto
  `}
`;

export const StyledLink = styled.button`
  all: unset;
  min-width: 100px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  background-color: ${props =>
    props.pageShow ? props.theme.palette.red : props.theme.palette.white};
  color: ${props => props.theme.palette.almostBlack};
  border: 1px solid ${props => props.theme.palette.white};
  border-radius: 10px;
  transition: 0.5s;
  :hover {
    background-color: ${props =>
      props.pageShow ? props.theme.palette.red : props.theme.palette.almostBlack};
    color: ${props => props.theme.palette.white};
  }
  ${deviceMedia.phone`
     margin: 1rem auto;
     width: 50%;
  `}
`;
