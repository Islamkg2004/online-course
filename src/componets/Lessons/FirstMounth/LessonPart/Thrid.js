import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "./FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Thrid(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Оператор</h3>
                        <p>Оператор — просто символ, который выполняет операцию, например сложение. этом примере + это оператор, а числа 8 и 2 — это операнды.

                            В случае сложения у нас есть два операнда: один слева, другой справа от знака +. Операции, которые требуют наличия двух операндов, называются бинарными. Если пропустить хотя бы один операнд, например, так 3 + ;, то программа завершится с синтаксической ошибкой.

                            Операции (не операторы) бывают не только бинарными, но и унарными (с одним операндом), и даже тернарными (с тремя операндами)! Причем операторы могут выглядеть одинаково, но обозначать разные операции.</p>
                        <h3>Задание</h3>
                        <p>
                            Напишите программу, которая посчитает разность между числами 6 и -81 и выведет ответ на экран.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=CyMOlixfPMA&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=10&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Thrid;