import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Yslovne(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Создание (определение) метода</h3>
                        <p>Условные конструкции позволяют выполнять разный код основываясь на логических проверках.
                            Например если у человека есть деньги на счету, то во время покупки деньги спишутся
                            автоматически, если нет, то операция будет отклонена.

                            Напишем, для примера, метод, который определяет тип переданного предложения. Для начала она
                            будет отличать обычные предложения от вопросительных.
                            . if - конструкция языка, управляющая порядком инструкций. В скобках ей передается логическое выражение, а затем описывается блок кода в фигурных скобках. Этот блок кода будет выполнен, только если условие выполняется. Если условие не выполняется, то блок кода в фигурных скобках пропускается, и метод продолжает свое выполнение дальше. В нашем случае следующая строчка кода — return "general"; — заставит метод вернуть строку и завершиться.</p>
                        <h3>Задание</h3>
                        <p>
                            Реализуйте метод GetSentenceTone(), который принимает строку и определяет тон предложения. Если все символы в верхнем регистре, то это вопль — scream. В ином случае — нормальное предложение — normal.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=jGD0vn-QIkg&list=PLPV2KyIb3jR4CtEelGPsmPzlvP7ISPYzR&index=2&ab_channel=Brackeys'
                            light={true} controls={true} width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Yslovne;