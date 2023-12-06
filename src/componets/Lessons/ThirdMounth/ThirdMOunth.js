import React from 'react';
import Container from "../../container/Container";
import classes from "../FirstMounth/first.module.css";
import first from "../../../images/Course/pexels-alesia-kozik-6770774.png";
import {Link} from "react-router-dom";
import back from '../../../images/Lessons/back.jpeg'
import two from '../../../images/Lessons/fac.jpeg'
import three from '../../../images/Lessons/images.jpeg'
import  four from  '../../../images/Lessons/imagesas).jpeg'
function ThirdMOunth(props) {
    return (
        <>
            <Container>
                <div className={classes.inner}>
                    <h2 className={classes.text}>3 Месяц</h2>
                    <div className={classes.line}></div>
                    <div className={classes.first}>
                        <Link to='/course/yslovnse'>
                            <div className={classes.item}>
                                <img src={two} alt=""/>
                                <h3>Условные конструкции</h3>
                            </div>
                        </Link>

                        <Link to='/course/if-else'>
                            <div className={classes.item}>
                                <img src={three} alt=""/>
                                <h3>Конструкция if-else</h3>
                            </div>
                        </Link>

                        <Link to='/course/else-if'>
                            <div className={classes.item}>
                                <img src={back} alt=""/>
                                <h3>Конструкция else if</h3>
                            </div>
                        </Link>

                        <Link to='/course/ternarny'>
                            <div className={classes.item}>
                                <img src={four} alt=""/>
                                <h3>Тернарный оператор</h3>
                            </div>
                        </Link>

                        <Link to='/course/switch'>
                            <div className={classes.item}>
                                <img src={first} alt=""/>
                                <h3>Конструкция Switch</h3>
                            </div>
                        </Link>

                    </div>

                </div>
            </Container>
        </>
    );
}

export default ThirdMOunth;