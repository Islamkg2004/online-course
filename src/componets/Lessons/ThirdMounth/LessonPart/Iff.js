import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Iff(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Конструкция if-else</h3>
                        <p>ОУсловная конструкция if имеет несколько разновидностей, одна из которых включает в себя блок, выполняющийся в случае если условие ложно. Пример:

                            if (x > 5)
                            {
                                // Если условие true
                            }
                            else
                            {
                                // Если условие false
                            }
                            Такая структура может понадобится при начальной инициализации значения. В примере ниже проверяется, если email отсутствует, то устанавливаем значение по умолчанию, если его передали, то выполняем нормализацию.

                            // Где-то здесь приходит email

                            if (email.Equals(""))
                            {
                                // Если email пустой, то ставим дефолт

                            }
                            else
                            {
                                // иначе чистим

                            }

                            // Здесь используем эту почту</p>
                        <h3>Задание</h3>
                        <p>
                            Реализуйте метод NormalizeUrl(), который выполняет так называемую нормализацию данных. Он принимает адрес сайта и возвращает его с https:// в начале.

                            Метод принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС

                            Можно использовать метод StartsWith() чтобы проверить начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.
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

export default Iff;