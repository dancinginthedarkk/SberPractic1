import styled from 'styled-components';
import { Typography } from './global';
import Banner from '../assets/background-banner.svg';
import BannerMobile from '../assets/background-mobile-banner.svg';

export const Container = styled.div`
  border-radius: 60px;
  background-color: rgba(53, 195, 120, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 1.5rem;
    border-radius: 30px;
    background-image: url(${BannerMobile});
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    flex-direction: column-reverse;
    padding: 1.5rem;
    border-radius: 30px;
  }
`;

export const ImageBanner = styled.img`
  max-width: 536px;
  min-width: 350px;
  border-radius: 50px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    min-width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    width: 100%;
    border-radius: 25px;
  }
`;

export const InfoBlock = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    gap: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    width: 100%;
    gap: 25px;
  }
`;

export const TypographyDescription = styled(Typography)`
  font-size: calc(18px + 7 * (100vw - 390px) / 1530);
  font-weight: 500;
  line-height: 173%;
  letter-spacing: -0.625px;
  color: #323f48;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    text-align: justify;
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;
