import React from 'react';
import classes from "../FirstMounth/first.module.css";
import first from "../../../images/Course/pexels-alesia-kozik-6770774.png";
import Container from "../../container/Container";
import {Link} from "react-router-dom";
import back from '../../../images/Lessons/back.jpeg'
import two from '../../../images/Lessons/fac.jpeg'
import three from '../../../images/Lessons/images.jpeg'
import  four from  '../../../images/Lessons/imagesas).jpeg'
function FourMount(props) {
    return (
        <>
            <Container>
                <div className={classes.inner}>
                    <h2 className={classes.text}>4 Месяц</h2>
                    <div className={classes.line}></div>
                    <div className={classes.first}>
                        <Link to='/course/while'>
                            <div className={classes.item}>
                                <img src={three } alt=""/>
                                <h3>Цикл While</h3>
                            </div>
                        </Link>
                        <Link to='/course/data'>
                            <div className={classes.item}>
                                <img src={back} alt=""/>
                                <h3>Агрегация данных </h3>
                            </div>
                        </Link>
                        <Link to='/course/yslocia'>
                            <div className={classes.item}>
                                <img src={four} alt=""/>
                                <h3>Условия внутри тела цикла</h3>
                            </div>
                        </Link>
                        <Link to='/course/formirovania'>
                            <div className={classes.item}>
                                <img src={first} alt=""/>
                                <h3>Формирование строк в циклах</h3>
                            </div>
                        </Link>
                        <Link to='/course/for'>
                            <div className={classes.item}>
                                <img src={two} alt=""/>
                                <h3>Цикл For</h3>
                            </div>
                        </Link>
                    </div>

                </div>
            </Container>
        </>
    );
}

export default FourMount;