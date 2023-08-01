import styled, { keyframes } from 'styled-components';
import { DefaultButton, Typography } from './global';
import Banner from '../assets/background-banner-main.svg';
import BannerMobile from '../assets/background-mobile-main.svg';

export const Container = styled.div`
  border-radius: 60px;
  background: var(linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%));
  margin-top: -50px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 5rem;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 30px;
    margin-top: -25px;
    background-image: url(${BannerMobile});
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 30px;
    margin-top: 0;
  }
`;

export const InfoBanner = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  z-index: 2;

  @media screen and (max-width: 480px) {
    width: 100%;
    gap: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    width: 100%;
    gap: 25px;
  }
`;

export const TypographyH1 = styled(Typography)`
  font-size: calc(60px + 40 * (100vw - 768px) / 1530);
  font-weight: 400;
  align-self: flex-start;

  @media screen and (max-width: 480px) {
    align-self: center;
    font-size: 30px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    align-self: center;
  }
`;

export const TypographyDescription = styled(Typography)`
  font-size: calc(18px + 7 * (100vw - 390px) / 1530);
  font-weight: 500;
  line-height: 173.5%;
  letter-spacing: -0.625px;

  @media screen and (max-width: 480px) {
    text-align: justify;
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const Button360 = styled(DefaultButton)`
  color: #323f48;
  background: #f0f3fd;
  transition: transform 0.2s;

  a {
    text-decoration: none;
    color: #323f48;
  }

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    height: 50px;
    padding: 0 3rem;
  }
`;

export const ImageBanner = styled.img`
  max-width: 536px;
  min-width: 350px;
  max-height: 511px;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  z-index: 2;
  object-fit: cover;
  filter: contrast(0.9);
  object-position: left;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    min-width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    width: 100%;
  }
`;

export const waveAnimation = keyframes`
      0% {
            background-position-x: 0;
      }
      100% {
            background-position-x: -1600px;
      }
`;

export const swellAnimation = keyframes`
      0%, 100% {
            transform: translateY(-25px);
      }
      50% {
            transform: translateY(5px);
      }
`;

export const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.1;
  z-index: 1;

  @media screen and (max-width: 480px) {
    border-radius: 30px;
  }
`;

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 198px;
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg) repeat-x;
  animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.3;
  z-index: 1;

  @media screen and (max-width: 480px) {
    border-radius: 30px;
  }
`;

export const InnerWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg) repeat-x;
  animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${swellAnimation} 7s ease -1.25s infinite;
  opacity: 0.3;
  z-index: 1;

  @media screen and (max-width: 480px) {
    border-radius: 30px;
  }
`;
