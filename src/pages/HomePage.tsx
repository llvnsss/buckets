// Переходим на этот файл после перемещения логики страницы

import React, {FC} from "react";
import HomeFeatures from "../features/HomeFeatures";

const HomePage: FC = () => {
    return <HomeFeatures/> //Возвращения компонента HomeFeatures
}
export default HomePage;