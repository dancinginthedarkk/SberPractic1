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
  padding: 21px 65px;
  justify-content: center;
  align-items: center;
  border: 0;
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
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
`;

export const AlgaeLong = styled.img`
  transform: rotate(11deg);
  position: absolute;
  left: -118px;
  top: 0;
  z-index: -1;
`;

export const AlgaeLongBottom = styled.img`
  transform: rotate(11deg);
  position: absolute;
  left: -230px;
  top: 158px;
  z-index: -1;
`;
