import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 23px;
  position: relative;
  z-index: 5;
`;

export const InsideContainer = styled.div`
  width: 85%;
  justify-content: center;
  align-items: center;

  @media (max-width: 390px) and (min-width: 450px) {
    width: 92%;
  }
`;

export const Typography = styled.p`
  color: #ededed;
  font-family: Inter, sans-serif;
  font-style: normal;
  margin: 0;
`;

export const DefaultButton = styled.button`
  border-radius: 20px;
  height: 70px;
  //padding: 21px 65px;
  padding: 1.5rem 4rem;
  justify-content: center;
  align-items: center;
  border: 0;
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 390px) and (min-width: 450px) {
    width: 159px;
    height: 36px;
    font-size: 14px;
    padding: 0;
    border-radius: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F0F3FD;
  }
  html {
    scroll-behavior: smooth;
  }
`;

export const Algae = styled.img`
  width: 264px;
  height: 450px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 390px) and (min-width: 450px) {
    width: 114px;
    height: 195px;
    transform: rotate(331deg);
    right: 0;
    bottom: 0;
  }
`;

export const AlgaeLong = styled.img`
  transform: rotate(11deg);
  position: absolute;
  left: -118px;
  top: 0;
  z-index: -1;

  @media screen and (max-width: 390px) {
    width: 47px;
    height: 108px;
    left: -15px;
  }
`;

export const AlgaeLongBottom = styled.img`
  transform: rotate(11deg);
  position: absolute;
  left: -230px;
  top: 158px;
  z-index: -1;

  @media screen and (max-width: 390px) {
    width: 47px;
    height: 108px;
    left: -33px;
    top: 25px;
  }
`;
