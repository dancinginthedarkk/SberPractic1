import styled from 'styled-components';
import { Typography } from './global';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  //height: 30vw;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 32px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
`;

export const ModalContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 2em 0;
`;

export const TypographyHeader = styled(Typography)`
  color: #323f48;
  font-size: 65px;
  font-weight: 400;
  text-align: center;
`;

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  text-align: justify;
  font-size: 22px;
  font-weight: 500;
  line-height: 173.5%; /* 43.375px */
  letter-spacing: -0.625px;
`;

export const ModalPanorama = styled.div`
  border-radius: 50px;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: relative;
`;

export const CloseIcon = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: absolute;
  top: 51px;
  right: 51px;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
