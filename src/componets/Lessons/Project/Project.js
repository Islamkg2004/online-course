import React from 'react';
import Container from "../../container/Container";
import classes from "../FirstMounth/first.module.css";
import {Link} from "react-router-dom";
import one from  "../../../images/Lessons/weater.jpeg"
import two from  '../../../images/Lessons/unnamed.webp'
import three from '../../../images/Lessons/imagesssss.png'
import four from  '../../../images/Lessons/krestiki-noliki-onlajn.jpg'

function Project() {
    return (
        <>
            <Container>
                <div className={classes.inner}>
                    <h2 className={classes.text}>Проекты</h2>
                    <div className={classes.line}></div>
                    <div className={classes.first}>
                        <Link to='/course/pogoda'>
                            <div className={classes.item}>
                                <img src={one} alt=""/>
                                <h3>Погода</h3>
                            </div>
                        </Link>
                        <Link to='/course/TODOLIST'>
                            <div className={classes.item}>
                                <img src={three} alt=""/>
                                <h3>Todo List </h3>
                            </div>
                        </Link>
                        <Link to='/course/Tictac'>
                            <div className={classes.item}>
                                <img src={four} alt=""/>
                                <h3>Крестики нолики</h3>
                            </div>
                        </Link>
                        <Link to='/course/calculator'>
                            <div className={classes.item}>
                                <img src={two} alt=""/>
                                <h3>Калькулятор</h3>
                            </div>
                        </Link>
                    </div>

                </div>
            </Container>
        </>
    );
}

export default Project;