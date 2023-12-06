import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "./FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Five(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Приоритет операций</h3>
                        <p>Посмотрите внимательно на выражение 2 + 2 * 2 и посчитайте в уме ответ.

                            Правильный ответ: 6.

                            Если у вас получилось 8, то этот урок для вас. В школьной математике мы изучали понятие «приоритет операции». Приоритет определяет то, в какой последовательности должны выполняться операции. Например, умножение и деление имеют больший приоритет, чем сложение и вычитание: 2 + 3 * 2 вычислится в 8.

                            Но нередко вычисления должны происходить в порядке, отличном от стандартного приоритета. В сложных ситуациях приоритет можно (и нужно) задавать круглыми скобками, точно так же, как в школе, например: (2 + 2) * 2.

                            Скобки можно ставить вокруг любой операции. Они могут вкладываться друг в друга сколько угодно раз.</p>
                        <h3>Задание</h3>
                        <p>
                            Дано выражение 70 * 3 + 4 / 8 + 2.

                            Расставьте скобки так, чтобы оба сложения (3 + 4 и 8 + 2) высчитывались в первую очередь. Выведите результат на экран.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=xFSGcf-B5oU&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=13&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Five;