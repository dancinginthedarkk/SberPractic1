import { Header } from '../../components/header';
import { Container, InsideContainer } from '../../styles/global';
import { Banner } from '../../components/banner';
import { InfoBanner } from '../../components/info-banner';
import { Panorama } from '../../components/panorama';
import { Footer } from '../../components/footer';
import { Locations } from '../../components/locations';

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
      </InsideContainer>
    </Container>
  );
};
