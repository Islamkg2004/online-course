import React from 'react';
import classes from "./Master.module.css";
import Container from "../container/Container";
import Header from "../header/Header";

function Master(props) {
    return (
        <>
            <div className={classes.wrap}>
                <Container>
                    <Header/>
                    <div className={classes.main}>
                        <div className={classes.main_inner}>
                            <h1>Ваш двигатель для вашего будещего.</h1>
                            <p> «Мы строим самолет, в то время как мы летаем на нем, большие данные, но сногсшибательная дата. Команды должной осмотрительности смогли управлять и повышать осведомленность »</p>
                            <div className={classes.main_name}>
                                <span>John Alexander</span>

                            </div>

                        </div>
                    </div>
                </Container>

            </div>

        </>
    );
}

export default Master;