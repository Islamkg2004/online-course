import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Fourr(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Цепочки вызовов методов</h3>
                        <p>Обработка данных может состоять из достаточно большого количества шагов, которые нужно выполнить. Возьмем для примера такую задачу: На основе введенного пользователем названия статьи сформировать адрес страницы в интернете. Такая задача часто возникает при публикации статей в блогах. Подобные адреса выглядят так: https://ru.hexlet.io/blog/posts/iz-vahtovika-v-programmirovanie. Последняя часть здесь iz-vahtovika-v-programmirovanie создана автоматически кодом, который мы написали на Хекслете. Кстати у нее есть специальное название – это слаг.

                            Какие шаги нужно выполнить чтобы получить подобную строку? Вот лишь некоторые из них:

                            Перевести все в нижний регистр, чтобы случайно не создавались дубли одинаковых страниц в поисковых системах
                            Очистить название от пробельных символов на концах. Там они могут случайно появиться при вводе названия
                            Выполнить транслитерацию. Лучше когда в адресах только символы латинского алфавита
                            Вырезать все специальные символы, такие как вопросы, восклицательные знаки и т.п.
                            Заменить все пробелы на дефисы</p>
                        <h3>Задание</h3>
                        <p>
                            Напишите код, который берет данные из переменной name и выполняет капитализацию, в программировании так называют операцию, которая делает заглавной первую букву в слове, а все остальные переводит в нижний регистр. Например: heXlet => Hexlet.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=_8yZYhAkQjQ&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0itProger%2F%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Fourr;