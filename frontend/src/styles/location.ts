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
  gap: 2rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 390px) and (min-width: 450px) {
    gap: 15px;
  }
`;

export const Card = styled.div<PanoramaProps>`
  width: 24vw;
  //height: 450px;
  aspect-ratio: 1 / 1;
  //max-width: 450px;
  //min-width: 350px;
  //max-height: 450px;
  //min-height: 350px;
  border-radius: 50px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: gray;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }

  @media (max-width: 390px) and (min-width: 450px) {
    border-radius: 25px;
    width: 165px;
    height: 165px;
  }
`;

export const ArrowRight = styled.img`
  //max-width: 63px;
  //min-width: 40px;
  //height: 59px;
  width: 15%;
  align-self: end;
  padding-right: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 390px) and (min-width: 450px) {
    padding-right: 25px;
    padding-bottom: 25px;
  }
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  //font-size: 100px;
  font-size: calc(60px + 40 * (100vw - 768px) / 1152);
  font-weight: 500;
  line-height: normal;
  position: relative;
  z-index: 5;

  @media (max-width: 390px) and (min-width: 450px) {
    font-size: 30px;
  }
`;

export const TypographyLocationName = styled(Typography)`
  color: #f0f3fd;
  font-size: calc(20px + 20 * (100vw - 390px) / 1530);
  //font-size: 40px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 100%;
  padding-top: 3rem;
  padding-left: 2rem;

  @media (max-width: 390px) and (min-width: 450px) {
    font-size: 16px;
    letter-spacing: -0.3px;
    padding-top: 25px;
    padding-left: 25px;
  }
`;
