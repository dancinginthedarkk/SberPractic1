import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
