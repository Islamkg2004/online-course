import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Eelse(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Конструкция else if</h3>
                        <p>В самой полной версии, конструкция if содержит не только ветку else, но и другие условные проверки с помощью else if. Такой вариант используется при большом количестве проверок, которые взаимоисключают друг друга.

                            if (/* что-то */)
                            {

                            }
                            else if (/* другая проверка */)
                            {

                            }
                            else if (/* другая проверка */)
                            {

                            }
                            else
                            {

                            }
                            Два момента. Ветка else может отсутствовать. Количество else if условий может быть любым, хоть одно, хоть десять.                           .</p>
                        <h3>Задание</h3>
                        <p>
                            На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

                            Напишите для Сэма метод WhoIsThisHouseToStarks(), который принимает на вход фамилию семьи и возвращает одно из трех значений: "friend", "enemy", "neutral".
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=qrPuaaVGEp4&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=16&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Eelse;