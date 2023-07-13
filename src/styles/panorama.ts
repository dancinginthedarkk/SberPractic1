import styled from 'styled-components';
import { Typography } from './global';
const panorama: string = require('../assets/test-panorama.svg').default;

export const Container = styled.div`
  //width: 85%;
  margin-bottom: 100px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const HeaderPanorama = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  font-size: 100px;
  font-weight: 500;
  line-height: normal;
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
`;

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  text-align: center;
`;

export const PanoramaContainer = styled.div`
  width: 100%;
  border-radius: 60px;
  background-image: url(${panorama});
  height: 671px;
  background-repeat: no-repeat;
  background-size: cover;
`;
