import {
  Container,
  HeaderPanorama,
  Icon360,
  PanoramaContainer,
  TypographyDescription,
  TypographyH1
} from '../../styles/panorama';

export const Panorama = () => {
  return (
    <Container>
      <HeaderPanorama>
        <TypographyH1>Экскурсия по офису</TypographyH1>
        <Icon360>360°</Icon360>
      </HeaderPanorama>
      <TypographyDescription>
        Ниже вы можете вживую погулять по нашему <br /> чудесному офису бла бла
      </TypographyDescription>
      <PanoramaContainer>
        <a id="panorama"></a>
      </PanoramaContainer>
    </Container>
  );
};
