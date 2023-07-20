import styled from 'styled-components';
import { Typography } from './global';

type PanoramaProps = {
  background: string;
};

export const LocationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    gap: 30px;
    justify-content: center;
  }
`;

export const Card = styled.div<PanoramaProps>`
  width: 24vw;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: gray;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ background }) => `url(${background})`};
    filter: brightness(0.8);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50px;

    @media screen and (max-width: 480px) {
      border-radius: 25px;
      width: 165px;
      height: 165px;
      background-size: cover;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px) {
      border-radius: 25px;
      width: 35vw;
      background-size: cover;
    }
  }

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }

  @media screen and (max-width: 480px) {
    border-radius: 25px;
    width: 165px;
    height: 165px;
    background-size: cover;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    border-radius: 25px;
    width: 35vw;
    background-size: cover;
  }
`;

export const CardInside = styled.div`
  position: relative;
  padding: 3rem 3rem 2rem 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    border-radius: 25px;
    background-size: cover;
    padding: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    border-radius: 25px;
    width: 35vw;
    background-size: cover;
    padding: 2rem 2rem 1rem 1rem;
  }
`;

export const ArrowRight = styled.img`
  width: 15%;
  align-self: end;
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  font-size: calc(60px + 40 * (100vw - 768px) / 1152);
  font-weight: 500;
  line-height: normal;
  position: relative;
  z-index: 5;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const TypographyLocationName = styled(Typography)`
  color: #f0f3fd;
  font-size: calc(20px + 20 * (100vw - 390px) / 1530);
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 100%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    letter-spacing: -0.4px;
  }
`;
