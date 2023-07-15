import styled from 'styled-components';
import { Typography } from './global';
import Banner from '../assets/background-banner.svg';

export const Container = styled.div`
  border-radius: 60px;
  background-color: rgba(53, 195, 120, 0.1);
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  gap: 72px;
  padding: 4em 2em;
  //padding: 68px 43px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export const ImageBanner = styled.img`
  max-width: 536px;
  min-width: 450px;
  border-radius: 50px;
`;

export const InfoBlock = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;

  p {
    margin: 0;
  }
`;

export const TypographyDescription = styled(Typography)`
  font-size: 25px;
  font-weight: 500;
  line-height: 173.523%;
  letter-spacing: -0.625px;
  color: #323f48;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 2em;

  p {
    margin: 0;
  }
`;
