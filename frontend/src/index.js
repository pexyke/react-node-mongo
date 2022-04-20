import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import "./assets/scss/auth.scss";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </StrictMode>,
);