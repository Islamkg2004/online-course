import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function WWhile(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Цикл While</h3>
                        <p>Программы, которые мы пишем, становятся всё сложнее и объемнее. Они все ещё очень далеки от реальных программ, где количество строк кода измеряется десятками и сотнями тысяч (а иногда и миллионами), но текущая сложность уже способна заставить напрячься людей без опыта. Начиная с этого урока, мы переходим к одной из самых сложных базовых тем в программировании – циклам.

                            Любые прикладные программы служат очень прагматичным целям. Они помогают управлять сотрудниками, финансами, развлекают в конце концов. Несмотря на различия, все эти программы выполняют заложенные в них алгоритмы, которые очень похожи между собой. Что это такое? Алгоритм — это последовательность действий (инструкций), которая приводит нас к некоему ожидаемому результату. В принципе, это описание подходит под любую программу, но под алгоритмами обычно понимается что-то более специфичное.

                            Представьте себе, что у нас есть книга и мы хотим найти внутри неё какую-то конкретную фразу. Саму фразу мы помним, но не знаем, на какой она странице. Как найти нужную страницу? Самый простой (и долгий) способ — последовательно просматривать страницы до тех пор, пока мы не найдем нужную. В худшем случае придется просмотреть все страницы, но результат мы всё равно получим. Именно этот процесс и называется алгоритмом. Он включает в себя логические проверки (нашли ли фразу) и перебор страниц. Количество страниц, которое придется посмотреть, заранее неизвестно, но сам процесс просмотра повторяется из раза в раз совершенно одинаковым образом. Для выполнения повторяющихся действий как раз и нужны циклы. Каждый повтор, в таком случае, называется итерацией.</p>
                        <h3>Задание</h3>
                        <p>
                            Модифицируйте метод PrintNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=MFSx0tbcRqc&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=21&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default WWhile;