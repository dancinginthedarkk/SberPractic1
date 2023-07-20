import { Container, InfoBlock, TypographyDescription, ImageBanner } from '../../styles/info-banner';
import Port from '../../assets/port.png';

export const InfoBanner = () => {
  return (
    <Container>
      <ImageBanner src={Port} alt="Изображение порта"></ImageBanner>
      <InfoBlock>
        <TypographyDescription>
          <p>
            Офис находится около главного морского порта по адресу Войкова, 2 в городе Сочи, и мы не могли оставить это
            без внимания.
          </p>
          <p>
            Концепция офиса во многом пересекается с морской тематикой, и мы решили выступить в рамках КИБа неким
            «портом» где находятся различные команды, а так же «пристанью» для временной удаленной работы для всех
            сотрудников корпоративного блока.
          </p>
          <p>
            Площадка рассчитана на 200 рабочих мест для постоянных резидентов + выделенно 22 места в коворкинге для
            работы в рамках удаленной работы для всех сотрудников блока КИБ.
          </p>
        </TypographyDescription>
      </InfoBlock>
    </Container>
  );
};
