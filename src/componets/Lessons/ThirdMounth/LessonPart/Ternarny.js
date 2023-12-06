import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Ternarny(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Тернарный оператор</h3>
                        <p>В C# существует конструкция, которая по своему действию аналогична конструкции if-else, но при этом является выражением. Она называется тернарный оператор. Тернарный оператор — единственный в своем роде оператор, требующий три операнда. Он помогает писать меньше кода для простых условных выражений. Наш пример выше с тернарным оператором превращается в три строки кода:
                            Общий шаблон выглядит так: predicate ? expression on true> : expression on false>. То есть сначала мы записываем логическое выражение, а дальше два разных варианта поведения, первый, сразу после вопроса, выполняется если условие истинно, и второй, после двоеточия выполняется если условие ложно.
                            .</p>
                        <h3>Задание</h3>
                        <p>
                            Реализуйте метод ConvertString(), который принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, метод должен вернуть пустую строку.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=9o8opcKO0f0&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=17&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Ternarny;