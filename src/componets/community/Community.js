import React from 'react';
import classes from './community.module.css'
import Container from "../container/Container";
import img from "../../images/backg.png"
function Community( ) {
    return (
        <>
                <div className={classes.wrapper}>
                    <Container>
                        <div className={classes.inner}>
                        <div className={classes.left}>
                            <h2>Гарантия.</h2>
                            <p className={classes.text}>Мы также гарантируем, что наши курсы доступны каждому и доступны из любой точки мира. Наши выдающиеся наставники готовы помочь нашим студентам в достижении их жизненных устремлений. Вместе мы создаем сообщество, которое поддерживает друг друга и переводит весь опыт на новый уровень.</p>

                        </div>
                        <div className={classes.right}>
                            <img src={img} alt=""/>
                        </div>
                        </div>
                    </Container>

                </div>
        </>
    );
}

export default Community;