import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Formirovania(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Формирование строк в циклах</h3>
                        <p>Ещё одно использование циклов – формирование строк. Подобная задача нередко встречается в программировании. Она сводится к обычной агрегации через конкатенацию.

                            Есть одна задача, крайне популярная среди людей, проводящих собеседования, это переворот строки. Её можно решить множеством разных способов, но именно посимвольный перебор считается самым базовым. Пример работы этой функции:.</p>
                        <h3>Задание</h3>
                        <p>Реализуйте такой же метод Reverse(), но выполняющий обход строки не с первого элемента по последний, а наоборот, от последнего к первому. Общая структура функции при этом останется такой же. Изменится начальный индекс, условие окончания цикла, сборка новой строки и формирование нового индекса в цикле.
                        </p>
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

export default Formirovania;