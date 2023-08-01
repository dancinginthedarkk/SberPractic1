import {
  ButtonPanorama,
  Container,
  HeaderPanorama,
  Icon360,
  PanoramaContainer,
  PanoramaContent,
  TypographyDescription,
  TypographyH1
} from '../../styles/panorama';
import React, { useState } from 'react';
import { Pano } from '../panorama-360';

type PanoramaProps = {
  initialPanoramaId: string;
};

export const Panorama: React.FC<PanoramaProps> = ({ initialPanoramaId }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsActive(true);
  };

  return (
    <Container>
      <HeaderPanorama>
        <TypographyH1>Экскурсия по офису</TypographyH1>
        <Icon360>360°</Icon360>
      </HeaderPanorama>
      <TypographyDescription>
        Готовы ли вы отправиться вместе с нами <br /> в уникальную морскую экскурсию по нашему офису?
      </TypographyDescription>
      <PanoramaContainer>
        <a id="panorama"></a>
        <PanoramaContent isActive={isActive}>
          <Pano isMovable={isActive} initialPanoramaId={initialPanoramaId} />
        </PanoramaContent>
        {!isActive && <ButtonPanorama onClick={handleButtonClick}>Начать экскурсию</ButtonPanorama>}
      </PanoramaContainer>
    </Container>
  );
};
