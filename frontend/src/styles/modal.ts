import styled from 'styled-components';
import { Typography } from './global';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 32px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scrollbar-width: auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (min-width: 481px) and (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`;

export const ModalContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 2em 0;
`;

export const TypographyHeader = styled(Typography)`
  color: #323f48;
  font-size: calc(30px + 30 * (100vw - 390px) / 1530);
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    font-weight: 400;
  }
`;

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  text-align: justify;
  font-size: calc(14px + 6 * (100vw - 390px) / 1530);
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.625px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.35px;
  }
`;

export const ModalPanorama = styled.div`
  border-radius: 50px;
  width: 100%;
  object-fit: cover;
  height: 55vh;
  overflow: hidden;
  position: relative;
  object-position: center;

  @media screen and (max-width: 480px) {
    height: 45vh;
    border-radius: 25px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    height: 30vw;
    border-radius: 25px;
  }
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

  @media screen and (max-width: 480px) {
    top: 23px;
    right: 28px;
  }
`;
