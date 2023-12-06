import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "./FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function SecondLesson(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Арифметические операции</h3>
                        <p>C# — это язык программирования, созданный компанией Microsoft. Это один из самых популярных языков программирования в России и в мире — достаточно глянуть на число открытых вакансий (а еще на предлагаемые зарплаты). C# — кроссплатформенный язык. Это означает что на нем можно писать веб-сервисы, настольные приложения, мобильные приложения, приложения для интернета вещей (IoT), игры и еще многое другое.
                            На базовом уровне компьютеры оперируют только числами. Даже в прикладных программах на высокоуровневых языках внутри много чисел и операций над ними. К счастью, для старта достаточно знать обычную арифметику — с нее и начнем.

                            Для сложения двух чисел в математике мы пишем, например, 3 + 4. В программировании — то же самое.Туда же входят некоторые другие языки: C++, Java, JavaScript, PHP. Даже если C# не понравится как первый язык, то перейти на другой будет не сложно.</p>
                        <h3>Задание</h3>
                        <p>
                            Выведите на экран результат деления числа 81 на 9.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=l77oxzJUhMQ&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=2&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default SecondLesson;