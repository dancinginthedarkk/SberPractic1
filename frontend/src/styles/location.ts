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
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: gray;
  cursor: pointer;
  filter: brightness(0.8);

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

export const ArrowRight = styled.img`
  width: 15%;
  align-self: end;
  padding-right: 3rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 480px) {
    padding-right: 25px;
    padding-bottom: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    padding-right: 2rem;
    padding-bottom: 1rem;
  }
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
  padding-top: 3rem;
  padding-left: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    letter-spacing: -0.4px;
    padding-top: 25px;
    padding-left: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    padding-top: 2rem;
    padding-left: 1rem;
  }
`;
