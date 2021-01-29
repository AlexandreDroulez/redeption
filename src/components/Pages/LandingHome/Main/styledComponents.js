import styled from 'styled-components';
import { deviceMedia } from '../../../../../styles/helper';
import wallPaperGrey from '../../../../../assets/jpeg/backdrop-874452.jpg';

export const ContainerLandingHomeMain = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${wallPaperGrey});
`;

export const ContainerLandingHomeLeft = styled.div`
  position: relative;
  width: 30%;
  ${deviceMedia.tablet`
    width: 40%;
  `}
  ${deviceMedia.phone`
    width: 100%;
  `}
`;

export const Flag = styled.img`
  width: 100%;
  ${deviceMedia.phone`
    position: relative;
  `}
`;
export const ContainerAllIcon = styled.div`
  position: absolute;
  margin: 2rem;
  top: 0;
  ${deviceMedia.phone`
    top:16px;
  `}
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
export const Icon = styled.img`
  width: 15%;
`;

export const TitleBanner = styled.h3`
  text-align: center;
  margin: 1rem 0 3rem 0;
`;
export const TextForIcon = styled.div`
  margin: 0 0 0 2rem;
  font-weight: 600;
`;

export const ContainerLandingHomeRight = styled.div`
  padding: 1rem;
  width: 70%;
  color: ${props => props.theme.palette.white};
  line-height: 2rem;
  ${deviceMedia.tablet`
    width: 60%;
  `}
  ${deviceMedia.phone`
    width: 100%;
    text-align: center;
  `}
`;

// right

export const MainTitleRight = styled.h3`
  margin: 1.5rem auto 4rem auto;
  color: ${props => props.theme.palette.white};
  text-align: center;
  font-size: 3rem;
  line-height: 50px;
  ${deviceMedia.phone`
    font-size: 2rem;
  `}
`;

export const TitleVideo = styled.h3`
  text-align: center;
  width: 100%;
  color: ${props => props.theme.palette.white};
  margin: 3rem auto 3rem auto;
`;
