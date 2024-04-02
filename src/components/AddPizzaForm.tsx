// шаг 3
import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css';


interface AddPizzaFormProps { //интерфейс , 
  addPizza: (newPizza: Pizza) => void; //метод передачи пиццы и его тип, метод ничего не возвращает , поэтому в типе данных нужно прописать void
}

const initState = {
  title: '', price: '', img: '',//базовые значения для объектов,  initState - используем для дефолтного значения useState
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => { //получаем компонент  addPizza

  const [newPizza, setNewPizza] = //то , что передаем
    useState<{title: string, price: string, img: string}>(initState); //указать типы данных со стороны TS

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // св-во name передает название каждого поля, value - значение, которое вводится в поле 
    
    setNewPizza({
      ...newPizza,//текущее состояние 
      [name]: value //обновление полей
    });
  }




  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //блокировка стандартного поведния по нажатию на кнопку, чтобы страница не перезагружалась
    
    const { title, price, img } = newPizza; // получение данных из newPizza

    if (title && price && img) { //проверка на заполнение полей, если все поля заполнены, то можно использовать метод addPizza
      addPizza({
        title, img, price: Number(price), id: Date.now() //Number(price) - пр-ть цену в числовой тип данных, Date.now() - текущая временная рамка
      });
      setNewPizza(initState);//очищаем поля формы , через передачу дефолтного значения
    }
  }

  // console.log('new pizza>>>>', newPizza)

  return (
    <form onSubmit={handleSubmit}> {/*  onSubmit - вешаем обработчик события по нажатию на кнопку*/}
      <input name="title" type="text" placeholder="Название" onChange={handleChange} value={newPizza.title} />  {/* в value передаем соот-ие св-ва */}
      <input name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={newPizza.price} /> {/* в value передаем соот-ие св-ва */}
      <input name="img" type="text" placeholder="Изображение" onChange={handleChange} value={newPizza.img}
      /> {/* в value передаем соот-ие св-ва */}
      <button type="submit">  + Добавить в меню </button>
    </form>
  )
}
export default AddPizzaForm;