import styled, { keyframes } from 'styled-components';
import { DefaultButton, Typography } from './global';
import Banner from '../assets/background-banner-main.svg';

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

export const Container = styled.div`
  border-radius: 60px;
  background: var(--unnamed, linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%));
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  margin-bottom: 100px;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 5rem;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  //@media screen and (max-width: 1200px) {
  //  flex-direction: column;
  //}

  @media (max-width: 390px) and (min-width: 450px) {
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 30px;
    margin-top: 25px;
    margin-bottom: 50px;
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
`;

export const InfoBanner = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  z-index: 2;

  //@media screen and (max-width: 1200px) {
  //  width: 100%;
  //}

  @media (max-width: 390px) and (min-width: 450px) {
    width: 100%;
    gap: 25px;
  }
`;

export const TypographyH1 = styled(Typography)`
  //font-size: 6em;
  font-size: calc(60px + 40 * (100vw - 768px) / 1152);
  font-weight: 400;
  align-self: flex-start;

  //@media screen and (max-width: 1200px) {
  //  align-self: center;
  //}

  @media (max-width: 390px) and (min-width: 450px) {
    align-self: center;
    font-size: 30px;
  }
`;

export const TypographyDescription = styled(Typography)`
  //font-size: 1.5em;
  font-size: calc(18px + 7 * (100vw - 390px) / 1530);
  font-weight: 500;
  line-height: 173.523%;
  letter-spacing: -0.625px;

  @media (max-width: 390px) and (min-width: 450px) {
    text-align: justify;
    font-size: 12px;
    letter-spacing: -0.3px;
  }
`;

export const Button360 = styled(DefaultButton)`
  color: #323f48;
  background: #f0f3fd;
  //margin: 15px 0;
  transition: transform 0.2s;

  a {
    text-decoration: none;
    color: #323f48;
  }

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }
`;

export const ImageBanner = styled.img`
  max-width: 536px;
  min-width: 350px;
  //height: 511px;
  border-radius: 50px;
  z-index: 2;

  @media (max-width: 390px) and (min-width: 450px) {
    width: 302px;
    height: 300px;
    border-radius: 25px;
  }
`;
