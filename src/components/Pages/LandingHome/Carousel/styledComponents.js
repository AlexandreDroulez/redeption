import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { deviceMedia } from '../../../../../styles/helper';

export const ContainerCarousel = styled.div``;

export const StyledCarousel = styled(Carousel)`
  text-align: center;
  margin: 2rem auto;
  width: ${props => (props.zoom ? '100%' : '50%')};

  transition: 1s;
  ${deviceMedia.tablet` 
    width: 100%;
    `}
  .control-dots {
    background-color: black;
    bottom: -10px;
  }
`;

export const StyledImage = styled.img``;

export const ContainerZoom = styled.div`
  color: ${props => props.theme.palette.white};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
