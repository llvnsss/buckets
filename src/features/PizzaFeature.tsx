import React, { FC, useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; //получение пар-ов юрл компонента
import Pizza from '../models/Pizza';

const PizzaFeature:  FC = () => {
    // импортировать на PizzaPage

    const [pizza, setPizza] = useState<Pizza | null>(null);
    const {id} = useParams();

    useEffect(()=>{
        const pizzasState = localStorage.getItem('pizzasState');
        // проверка значения
        if (pizzasState && id){
            const pizzasList = JSON.parse(pizzasState); //получам список пицц
            const searchId = parseInt(id); //преобразовать id число 

            const currentPizza = pizzasList.find((p: Pizza) => p.id === searchId) //p - переменная, позволяющая сделать выборку по пиццам
            setPizza(currentPizza); //добавлене пиццы в локальное состояние
        }
    }, [])
    


    
    return (
        <>
            <span className='heading'>Ваш букет</span>
            <div className='pizza pizza-page'>
                <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
                <h2>{pizza?.title}</h2>
                <span>{pizza?.price}₽</span>
                <p>Только самые лучшие цветы</p>
            </div>
        </>
    )
}
export default PizzaFeature;

// После текущего кода нужно перйти в сингл пицца и поменять карточку пиццы