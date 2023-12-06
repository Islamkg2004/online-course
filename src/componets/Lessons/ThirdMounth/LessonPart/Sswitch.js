import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Sswitch(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Switch</h3>
                        <p>Многие языки в дополнение к условной конструкции if включают в себя switch. Это специализированная версия if, созданная для некоторых особых ситуаций. Например, её имеет смысл использовать там, где есть цепочка if else с проверками на равенство.
                            Свитч — довольно сложная конструкция с точки зрения количества элементов, из которых она состоит:

                            Внешнее описание, в которое входит ключевое слово switch. Переменная, по значениям которой switch будет выбирать поведение. И фигурные скобки для вариантов выбора.
                            Конструкции case и default, внутри которых описывается поведение для разных значений рассматриваемой переменной. Каждый case соответствует if в примере выше. default - это особая ситуация, соответствующая ветке else в условных конструкциях. Как else, указывать default не обязательно.
                            break нужен для предотвращения «проваливания». Если его не указать, то после выполнения нужного case выполнение перейдет к следующему case, и так либо до ближайшего break, либо до конца switch.
                            Фигурные скобки в switch не определяют блок кода, как это было в других местах. Внутри допустим только тот синтаксис, который показан выше. То есть там можно использовать case или default. А вот внутри каждого case (и default) ситуация другая. Здесь можно выполнять любой произвольный код

                            .</p>
                        <h3>Задание</h3>
                        <p>
                            Pеализуйте класс App со статическим методом с именем PrintMotto(), который выведет на экран фразу Winter is coming. Тесты будут вызывать ваш код вот так:

                            App.PrintMotto(); // => Winter is coming
                            Чтобы мы могли вызвать этот метод снаружи, нужно его пометить не только ключевым словом static, но еще и public.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=KM_VTfygj-E&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=19&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Sswitch;