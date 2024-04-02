import React from 'react';
import { BrowserRouter } from 'react-router-dom'; //импорт router ДОБАВИТЬ СТРОКУ
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Оборачиваем приложение в данный компонент */}
       <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

