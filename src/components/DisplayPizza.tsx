// Шаг 5 - отображение карточек пиццы
import React, { FC } from 'react';
import SinglePizza from '../components/SinglePizza';
import Pizza from '../models/Pizza';


interface DisplayPizzasProps {//описание пропсов (св-в)
  pizzasList: Pizza[]; //массив из пицц
  updatePizza: (newPizza: Pizza) => void; //изменение карточки пиццы
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = 
({ pizzasList, updatePizza, deletePizza }) => {
  return (
    //разметка
    <div className="container">
      {pizzasList.map((pizza) => { //pizzasList - обращаемся к каждой пицце и проходимся по ним при помощи map
    //   pizza - получаем каждую конкретную пиццу 
        return <SinglePizza key={pizza.id} deletePizza={deletePizza} updatePizza={updatePizza} pizza={pizza} />
      })}
    </div>
  )
}

export default DisplayPizzas;