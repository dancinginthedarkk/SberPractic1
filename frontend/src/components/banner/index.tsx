import {
  Button360,
  Container,
  ImageBanner,
  InfoBanner,
  InnerWave,
  Ocean,
  TypographyDescription,
  TypographyH1,
  Wave
} from '../../styles/banner';
import { HashLink } from 'react-router-hash-link';
import Regata from '../../assets/regata.jpg';

export const Banner = () => {
  return (
    <Container>
      <Ocean />
      <Wave>
        <InnerWave />
      </Wave>
      <InfoBanner>
        <TypographyH1>
          Офис Сбер <br />
          КИБ в Сочи
        </TypographyH1>
        <TypographyDescription>
          КИБ - корпоративно-инвестиционный бизнес Сбербанка России. Ключевыми направлениями деятельности являются
          корпоративное кредитование (включая торговое финансирование), документарный бизнес, инвестиционно-банковские
          услуги, торговые операции с ценными бумагами, собственные инвестиции.
        </TypographyDescription>
        <HashLink to="/#panorama">
          <Button360>Экскурсия 360°</Button360>
        </HashLink>
      </InfoBanner>
      <ImageBanner src={Regata} alt="Изображение регаты Сбер" />
    </Container>
  );
};
