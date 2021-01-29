import React, { useState } from 'react';
import screenScore from '../../../../../assets/screenScore1.jpg';
import { StyledCarousel, StyledImage, ContainerZoom, ContainerCarousel } from './styledComponents';

const CarouselImage = () => {
  const [zoom, setZoom] = useState(false);
  return (
    <ContainerCarousel>
      <StyledCarousel showThumbs={false} autoPlay zoom={zoom} swipeable>
        <div onClick={() => setZoom(!zoom)}>
          <StyledImage src={screenScore} alt="screenScore" />
        </div>
        <div onClick={() => setZoom(!zoom)}>
          <StyledImage src={screenScore} alt="screenScore" />
        </div>
        <div onClick={() => setZoom(!zoom)}>
          <StyledImage src={screenScore} alt="screenScore" />
        </div>
      </StyledCarousel>
      <ContainerZoom>
        <div onClick={() => setZoom(!zoom)}>Zoom</div>
      </ContainerZoom>
    </ContainerCarousel>
  );
};

export default CarouselImage;
