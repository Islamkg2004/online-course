import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function SData(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Агрегация данных</h3>
                        <p>Отдельный класс задач, который не может обойтись без циклов, называется агрегированием данных. К таким задачам относятся поиск максимального, минимального, суммы, среднего арифметического и т.п. Их главная особенность в том, что результат зависит от всего набора данных. Для расчета суммы нужно сложить все числа, для вычисления максимального нужно сравнить все числа.

                            С такими задачами хорошо знакомы все, кто занимаются числами, например бухгалтеры или маркетологи. Обычно их выполняют в таблицах наподобие Microsoft Excel или Google Sheets.

                            Разберем самый простой пример – поиск суммы набора чисел. Реализуем функцию, которая складывает числа в указанном диапазоне, включая границы. Диапазоном в данном случае называется ряд чисел от какого-то начала до определенного конца. Например, диапазон [1, 10] включает в себя все целые числа от 1 до 10.
                            .</p>
                        <h3>Задание</h3>
                        <p>
                            Реализуйте метод MultiplyNumbersFromRange() в классе App, который перемножает числа в указанном диапазоне включая границы диапазона. Пример вызова:                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=KM_VTfygj-E&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=19&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default SData;