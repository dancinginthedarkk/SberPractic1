import styled from 'styled-components';
import { DefaultButton, Typography } from './global';

type PanoramaProps = {
  isActive: boolean;
};

type PanoProps = {
  isLoading: boolean;
};

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  width: 100%;

  a {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const HeaderPanorama = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  font-size: calc(60px + 40 * (100vw - 768px) / 1152);
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Icon360 = styled.div`
  width: 160px;
  height: 58px;
  transform: rotate(9.081deg);
  border-radius: 60px;
  background: var(--unnamed, linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%));
  color: #f0f3fd;
  font-family: Inter, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: 58px;
  cursor: auto;

  &:hover {
    background: linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%);
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 67px;
    height: 24px;
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
  }
`;

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  font-size: calc(20px + 10 * (100vw - 390px) / 1530);
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const PanoramaContainer = styled.div`
  width: 100%;
  height: 40vw;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  border-radius: 60px;
  -webkit-border-radius: 60px;

  @media screen and (max-width: 480px) {
    height: 80vw;
    border-radius: 20px;
    -webkit-border-radius: 20px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    height: 40vw;
    border-radius: 20px;
    -webkit-border-radius: 20px;
  }
`;

export const PanoramaContent = styled.div<PanoramaProps>`
  filter: ${props => (props.isActive ? 'none' : 'brightness(0.3)')};
  width: 100%;
  height: 40vw;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  border-radius: 60px;
  -webkit-border-radius: 60px;

  @media screen and (max-width: 480px) {
    height: 80vw;
    border-radius: 20px;
    -webkit-border-radius: 20px;

    & > div {
      border-radius: 20px;
      -webkit-border-radius: 20px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    height: 40vw;
    border-radius: 20px;
    -webkit-border-radius: 20px;

    & > div {
      border-radius: 20px;
      -webkit-border-radius: 20px;
    }
  }
`;

export const PanoContainer = styled.div<PanoProps>`
  filter: ${props => (props.isLoading ? 'blur(10px)' : 'blur(0px)')};
  width: 100%;
  height: 100%;
  border-radius: 60px;
  -webkit-border-radius: 60px;

  @media screen and (max-width: 480px) {
    border-radius: 20px;
    -webkit-border-radius: 20px;
  }

  div ~ div {
    border-radius: 20px;
    -webkit-border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  canvas {
    border-radius: 60px;
    -webkit-border-radius: 60px;

    @media screen and (max-width: 1024px) {
      border-radius: 20px;
      -webkit-border-radius: 20px;
    }
  }
`;

export const ButtonPanorama = styled(DefaultButton)`
  height: 76px;
  background: #35c378;
  color: #f0f3fd;
  letter-spacing: -0.575px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    height: 36px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    height: 50px;
    padding: 0 3rem;
  }
`;
