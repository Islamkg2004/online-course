import React from 'react';
import classes from './HowTo.module.css'

import Container from "../container/Container";
import Edumena from  './Edumena.png'
function HowTo({list}) {
    const tasks = list.map(task => (
        <li key={task.id}>
            <img src={task.img} alt=""/>
            <p> {task.title} </p>
        </li>
    ))




    return (
        < >
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.HowTo_inner}>
                        <div className={classes.inner_left}>
                            <h2>
                                Почему Edumena?
                            </h2>
                            <p className={classes.text}>
                                Мы также гарантируем, что наши курсы доступны каждому и доступны из любой точки мира. Наши выдающиеся наставники готовы помочь нашим студентам в достижении их жизненных устремлений. Вместе мы создаем сообщество, которое поддерживает друг друга и переводит весь опыт на новый уровень.
                            </p>
                            <div className={classes.bottom}>
                                <ul>
                                    {tasks}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img src={Edumena} alt=""/>
                        </div>
                    </div>

                </Container>
            </div>


        </>
    );
}

export default HowTo;
