import { Container, TypographyDescription } from '../../styles/panorama';
import { LocationsContainer, TypographyH1 } from '../../styles/location';
import { CardLocation } from '../card-location';
import { AlgaeLong, AlgaeLongBottom } from '../../styles/global';
const algaeLong: string = require('../../assets/algae-2.svg').default;

export const Locations = () => {
  return (
    <Container>
      <AlgaeLong src={algaeLong}></AlgaeLong>
      <AlgaeLongBottom src={algaeLong}></AlgaeLongBottom>
      <TypographyH1>Основные локации</TypographyH1>
      <TypographyDescription>
        Ниже вы можете вживую погулять по нашему <br /> чудесному офису бла бла
      </TypographyDescription>
      <LocationsContainer>
        <CardLocation title={'Холл'}></CardLocation>
        <CardLocation title={'Кухня'}></CardLocation>
        <CardLocation title={'Терасса'}></CardLocation>
        <CardLocation title={'Коворкинг для иногородних сотрудников'}></CardLocation>
        <CardLocation title={'Переговорные комнаты'}></CardLocation>
        <CardLocation title={'Игровая комната'}></CardLocation>
      </LocationsContainer>
    </Container>
  );
};
