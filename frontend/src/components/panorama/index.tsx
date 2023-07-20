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
import { useState } from 'react';
import PanoramaImg from '../../assets/test-panorama.svg';
import { Pano } from '../panorama-360';

export const Panorama = () => {
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
        Ниже вы можете вживую погулять по нашему <br /> чудесному офису бла бла
      </TypographyDescription>
      <a id="panorama"></a>
      <PanoramaContainer>
        <Pano />
        {/*<PanoramaContent src={PanoramaImg} isActive={isActive}></PanoramaContent>*/}
        {/*{!isActive && <ButtonPanorama onClick={handleButtonClick}>Начать экскурсию</ButtonPanorama>}*/}
      </PanoramaContainer>
    </Container>
  );
};
