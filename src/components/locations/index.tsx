import { Container, TypographyDescription, TypographyH1 } from '../../styles/panorama';
import { LocationsContainer } from '../../styles/location';
import { CardLocation } from '../card-location';

export const Locations = () => {
  return (
    <Container>
      <TypographyH1>Основные локации</TypographyH1>
      <TypographyDescription>
        Ниже вы можете вживую погулять по нашему <br /> чудесному офису бла бла
      </TypographyDescription>
      <LocationsContainer>
        <CardLocation></CardLocation>
        <CardLocation></CardLocation>
        <CardLocation></CardLocation>
        <CardLocation></CardLocation>
        <CardLocation></CardLocation>
        <CardLocation></CardLocation>
      </LocationsContainer>
    </Container>
  );
};
