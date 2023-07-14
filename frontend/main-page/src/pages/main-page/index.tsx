import { Header } from '../../components/header';
import { Algae, Container, InsideContainer } from '../../styles/global';
import { Banner } from '../../components/banner';
import { InfoBanner } from '../../components/info-banner';
import { Panorama } from '../../components/panorama';
import { Footer } from '../../components/footer';
import { Locations } from '../../components/locations';
const algae: string = require('../../assets/algae-1.svg').default;

export const MainPage = () => {
  return (
    <Container>
      <InsideContainer>
        <Header />
        <Banner />
        <InfoBanner />
        <Panorama />
        <Locations />
        <Footer />
        <Algae src={algae}></Algae>
      </InsideContainer>
    </Container>
  );
};
