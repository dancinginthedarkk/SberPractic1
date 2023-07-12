import { Header } from '../../components/header';
import { Container } from '../../styles/global';
import { Banner } from '../../components/banner';
import { InfoBanner } from '../../components/info-banner';
import { Panorama } from '../../components/panorama';
import { Footer } from '../../components/footer';
import { Locations } from '../../components/locations';

export const MainPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <InfoBanner />
      <Panorama />
      <Locations />
      <Footer />
    </Container>
  );
};
