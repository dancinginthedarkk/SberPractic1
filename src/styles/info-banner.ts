import styled from 'styled-components';
import { Typography } from './global';

export const Container = styled.div`
  width: 85%;
  //height: 535px;
  border-radius: 60px;
  background: rgba(53, 195, 120, 0.1);
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  gap: 72px;
  padding: 68px 43px;
`;

export const ImageBanner = styled.img`
  width: 536px;
  height: 536px;
  border-radius: 50px;
`;

export const InfoBlock = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;
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
`;
