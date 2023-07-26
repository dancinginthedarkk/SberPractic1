import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 23px;
  position: relative;
`;

export const InsideContainer = styled.div`
  width: 85%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (max-width: 480px) {
    width: 92%;
    gap: 50px;
  }

  @media screen and (min-width: 481px) and (max-width: 1150px) {
    gap: 50px;
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
  padding: 1.5rem 4rem;
  justify-content: center;
  align-items: center;
  border: 0;
  font-family: Inter, sans-serif;
  font-size: calc(14px + 9 * (100vw - 480px) / 1440);
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 159px;
    height: 36px;
    font-size: 14px;
    padding: 0;
    border-radius: 10px;
    letter-spacing: -0.35px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    height: 50px;
    padding: 1.5rem 4rem;
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

  *[id=panorama] {
    display: block;
    height: 100vh;
    margin-top: -100vh;
    visibility: hidden;
  }
`;

export const Algae = styled.img`
  width: 264px;
  height: 450px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (max-width: 480px) {
    width: 114px;
    height: 195px;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 28%;
    height: 277px;
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

  @media screen and (max-width: 480px) {
    width: 83px;
    height: 108px;
    left: -15px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 40%;
    height: 190px;
    left: -32px;
  }
`;

export const AlgaeLongBottom = styled.img`
  transform: rotate(11deg);
  position: absolute;
  left: -230px;
  top: 158px;
  z-index: -1;

  @media screen and (max-width: 480px) {
    width: 83px;
    height: 108px;
    left: -33px;
    top: 37px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 40%;
    height: 190px;
    left: -97px;
    top: 95px;
  }
`;
