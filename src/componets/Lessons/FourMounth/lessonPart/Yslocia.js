import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Yslocia(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Условия внутри тела цикла</h3>
                        <p>Тело цикла, как и тело метода — это место выполнения инструкций. Значит, мы можем
                            использовать внутри него всё изученное ранее, например — условные конструкции.

                            Представьте себе метод, который считает, сколько раз входит буква в предложение. Пример его
                            работы:

                            App.CountChars("Fear cuts deeper than swords.", 'e'); // 4
                            // Если вы ничего не нашли, то результат — 0 совпадений
                            App.CountChars("Sansa", 'y'); // 0
                            Перед тем как посмотреть его содержимое, попробуйте ответить на вопросы:

                            Является ли эта операция агрегацией?
                            Какой будет проверка на вхождение символа?
                            Эта задача является агрегирующей. Несмотря на то, что метод считает не все символы, для подсчета самой суммы все равно приходится анализировать каждый символ.

                            Ключевое отличие этого цикла от рассмотренных заключается в наличии условия внутри тела. Переменная count увеличивается только в том случае, когда текущий рассматриваемый символ совпадает с ожидаемым.

                            В остальном — это типичный агрегатный метод, который возвращает количество нужных символов вызываемому коду.
                            .</p>
                        <h3>Задание</h3>
                        <p>
                            Метод из теории учитывает регистр букв. То есть A и a, с его точки зрения, это разные символы. Реализуйте вариант этого же метода так, чтобы регистр букв был не важен:
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=KCv5gNkbS9c&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=28&ab_channel=%23SimpleCode'
                            light={true} controls={true} width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Yslocia;