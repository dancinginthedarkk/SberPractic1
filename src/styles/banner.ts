import styled, { keyframes } from 'styled-components';
import { Typography } from './global';

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
  //width: 73%;
  //height: 579px;
  border-radius: 60px;
  background: var(--unnamed, linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%));
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  overflow: hidden; /* Добавлено */
  position: relative;
  margin-bottom: 100px;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 46px 102px;
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
`;

export const TypographyH1 = styled(Typography)`
  font-size: 100px;
  font-weight: 400;
  align-self: flex-start;
`;

export const TypographyDescription = styled(Typography)`
  font-size: 25px;
  font-weight: 500;
  line-height: 173.523%;
  letter-spacing: -0.625px;
`;

export const Button360 = styled.button`
  border-radius: 20px;
  height: 76px;
  padding: 21px 65px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  color: #323f48;
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  background: #f0f3fd;
  margin: 15px 0;

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
  width: 536px;
  height: 511px;
  border-radius: 50px;
  z-index: 2;
`;
