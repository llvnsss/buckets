import React, { FC, useEffect, useState } from 'react'; // {FC} - подключаем компоненты формы
import './App.css';

// Добавим
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PizzaPage from './pages/PizzaPage';

const App: FC = () => {

  return (
    // шаг 2 - настроить разметку
    <div className="App">
      <div className="wrap">
        <Routes>        {/* Пропишим маршруты до страниц */}
          <Route path='/' element={<HomePage/>}/>  {/* Путь до первой страницы */}
          <Route path='/pizza/:id' element={<PizzaPage/>}/>  {/* страница для отображения пицц одна, поэтому для отображения нужной пиццы будет осуществляться поиск по ид пиццы */}
        </Routes>
      </div>
    </div>
  );
}
export default App;
