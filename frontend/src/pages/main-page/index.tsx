import { Header } from '../../components/header';
import { Algae, Container, InsideContainer } from '../../styles/global';
import { Banner } from '../../components/banner';
import { InfoBanner } from '../../components/info-banner';
import { Panorama } from '../../components/panorama';
import { Footer } from '../../components/footer';
import { Locations } from '../../components/locations';
import AlgaeIcon from '../../assets/algae-1.svg';

export const MainPage = () => {
  return (
    <Container>
      <InsideContainer>
        <Header />
        <Banner />
        <InfoBanner />
        <Panorama initialPanoramaId="panoramaKitchen" />
        <Locations />
        <Footer />
        <Algae src={AlgaeIcon}></Algae>
      </InsideContainer>
    </Container>
  );
};
