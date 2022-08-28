import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StateContextProvider} from'./Context/ContextAPI';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateContextProvider>
    <App />
    </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

