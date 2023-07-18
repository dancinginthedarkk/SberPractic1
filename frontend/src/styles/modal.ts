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

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
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

  @media screen and (max-width: 480px) {
    font-size: 30px;
    font-weight: 400;
  }
`;

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  text-align: justify;
  font-size: 22px;
  font-weight: 500;
  line-height: 173.5%; /* 43.375px */
  letter-spacing: -0.625px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 173.5%;
    letter-spacing: -0.35px;
  }
`;

export const ModalPanorama = styled.img`
  border-radius: 50px;
  width: 100%;
  //height: 413px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    //width: 349px;
    height: 413px;
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
