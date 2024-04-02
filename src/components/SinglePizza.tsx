// шаг 6 - принимает данные по каждой пицце и отображат ее 
import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; //подключаем пакет из которого будут браться иконки 
import EditPizzaForm from './EditPizzaForm';
import Pizza from '../models/Pizza';
// Добавим для карточки
import { Link } from 'react-router-dom'; // в реакте используется вместо тега а

interface SinglePizzaProps {
  pizza: Pizza; //принимает данные по кадой пицце
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}
const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {

  const [edit, setEdit] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEdit(!edit); //меням значение на противоположное
  }
  const handleDelete = () => {
    deletePizza(pizza.id);
  }

  return (
    <div className="pizza">

      <img src={`/images/${pizza.img}`} alt={pizza.title}/>
      <h2>{/* добавили переход на карточку пиццы*/}
        <Link to={`/pizza/${pizza.id}`}>
          {pizza.title}
        </Link> 
        {/* Чтобы проверить работу, нужно нажать на название пиццы (должна открыться страницы пиццы) */}
      </h2>
      
      <span>{pizza.price} ₽</span>
      <div className="pizza-controls"> {/* 2 иконки для редактирования и удаления карточек */}
      {/*  Иконки - npm i react-icons  (с сайта npm пакетов) иконка - edit (карандаш), delete   */}
        <AiFillEdit onClick={handleToggleEdit}/>
        <AiFillDelete onClick={handleDelete} />
      </div>
      {edit //редактирование карточки
        ? <EditPizzaForm  //если тру, то отобажаем форму фповерх карточки
            data={pizza}
            updatePizza={updatePizza} //изменение карточки
            handleToggleEdit={handleToggleEdit} //при сабмите закрываем форму
          />
        : null}
    </div>
  )
}

export default SinglePizza;