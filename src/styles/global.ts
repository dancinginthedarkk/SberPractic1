import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 23px;
  margin-bottom: 32px;
`;

export const Typography = styled.p`
  color: #ededed;
  font-family: Inter, sans-serif;
  font-style: normal;
  margin: 0;
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
