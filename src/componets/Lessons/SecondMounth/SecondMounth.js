import React from 'react';
import Container from "../../container/Container";
import classes from "../FirstMounth/first.module.css";
import first from "../../../images/Course/pexels-alesia-kozik-6770774.png";
import {Link} from "react-router-dom";
import back from '../../../images/Lessons/back.jpeg'
import two from '../../../images/Lessons/fac.jpeg'
import three from '../../../images/Lessons/images.jpeg'
import  four from  '../../../images/Lessons/imagesas).jpeg'
function SecondMounth() {
    return(
        <>
            <Container>
                <div className={classes.inner}>
                    <h2 className={classes.text}>2 Месяц</h2>
                    <div className={classes.line}></div>
                    <div className={classes.first}>
                            <Link to='/course/peremene'>
                                <div className={classes.item}>
                                    <img src={back} alt=""/>
                                    <h3>Переменные</h3>
                                </div>
                            </Link>
                            <Link to='/course/type'>
                                <div className={classes.item}>
                                    <img src={four} alt=""/>
                                    <h3>Типы данных C#</h3>
                                </div>
                            </Link>
                            <Link to='/course/method'>
                                <div className={classes.item}>
                                    <img src={first} alt=""/>
                                    <h3>Вызов методов</h3>
                                </div>
                            </Link>
                            <Link to='/course/cypemethod'>
                                <div className={classes.item}>
                                    <img src={three} alt=""/>
                                    <h3>Цепочки вызовов методов</h3>
                                </div>
                            </Link>
                            <Link to='/course/oprdelene'>
                                <div className={classes.item}>
                                    <img src={two} alt=""/>
                                    <h3>Определение методов</h3>
                                </div>
                            </Link>

                    </div>

                </div>
            </Container>

        </>
    );
}

export default SecondMounth;