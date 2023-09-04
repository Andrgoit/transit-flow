import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <BrowserRouter basename="/transit-flow/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
