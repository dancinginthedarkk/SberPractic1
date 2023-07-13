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
  gap: 59px;
`;

export const Card = styled.div<PanoramaProps>`
  width: 450px;
  height: 450px;
  border-radius: 50px;
  //background-image: ${({ background }) => background};
  background-image: url(${require('../assets/hall.svg').default});
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
`;

export const ArrowRight = styled.img`
  width: 63px;
  height: 59px;
  align-self: end;
  padding-right: 60px;
  padding-bottom: 30px;
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  font-size: 100px;
  font-weight: 500;
  line-height: normal;
  position: relative;
  z-index: 5;
`;

export const TypographyLocationName = styled(Typography)`
  color: #f0f3fd;
  font-size: 40px;
  font-weight: 500;
  //letter-spacing: -1px;
  padding-top: 60px;
  padding-left: 30px;
`;
