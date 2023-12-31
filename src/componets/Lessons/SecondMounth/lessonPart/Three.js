import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Three(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3> Методы и их вызов</h3>
                        <p>Сложение, конкатенация, нахождение остатка от деления и остальные ранее рассмотренные операции – все это довольно базовые возможности языков программирования. Математика не ограничена арифметикой, кроме нее есть и множество других разделов со своими операциями, например, геометрия. То же самое касается и строк: их можно переворачивать, менять регистр букв, удалять лишние символы — и это только самое простое. И, наконец, на более высоком уровне есть прикладная логика конкретного приложения. Программы списывают деньги, считают налоги, формируют отчеты. Количество подобных операций бесконечно и индивидуально для каждой программы. И все они должны быть как-то выражены в коде.

                            Для выражения любой произвольной операции в программировании существует понятие функция. Функции бывают как встроенные в язык, так и добавленные программистом. С одной встроенной функцией мы уже знакомы, это WriteLine().

                            Функции — одна из ключевых конструкций в программировании, без них невозможно сделать практически ничего. Знакомство с ними мы начинаем как можно раньше, так как весь дальнейший материал оперирует функциями по максимуму. Сначала мы научимся пользоваться уже созданными функциями, а уже потом научимся создавать свои собственные.

                            Здесь нужно сделать небольшую оговорку. В C# невозможно создать обычную функцию, как это позволяет делать большинство других языков. Все функции C# создаются только внутри классов, которые мы пока не разбирали. А функции, которые определены внутри классов принято называть методами. Поэтому в дальнейшем мы будем придерживаться этой терминологии.

                            Начнем с простых методов для работы над строками. Ниже пример вызова метода ToUpper(), который переводит все слово в верхний регистр:</p>
                        <h3>Задание</h3>
                        <p>
                            В коде определена переменная с именем. Используя методы ToUpper() и ToLower() у этой переменной определите две новые переменные, чтобы на экран вывелась фраза:


                            Console.WriteLine("Hello, World!");
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=jGD0vn-QIkg&list=PLPV2KyIb3jR4CtEelGPsmPzlvP7ISPYzR&index=2&ab_channel=Brackeys' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default Three;