import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="SberPractic1">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
