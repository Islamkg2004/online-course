import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import Footer from "../../../Footer/Footer";
import classes from './FirstLesson.module.css'
import ReactPlayer from "react-player";
function FirstLesson(props) {
    return (
        <>
        <Container>
            <Header/>
            <div className={classes.inner}>
                <div className={classes.left}>
                    <h3>Основы C#</h3>
                    <p>C# — это язык программирования, созданный компанией Microsoft. Это один из самых популярных языков программирования в России и в мире — достаточно глянуть на число открытых вакансий (а еще на предлагаемые зарплаты). C# — кроссплатформенный язык. Это означает что на нем можно писать веб-сервисы, настольные приложения, мобильные приложения, приложения для интернета вещей (IoT), игры и еще многое другое.

                        Microsoft для своего языка создало удобную среду для разработки (IDE) — Visual Studio. Для того чтобы начать разрабатывать не нужно устанавливать десятки SDK, настраивать текстовые редакторы и т.д. Visual Studio включает в себя все нужные инструменты. Достаточно его установить и уже можно с удобством разрабатывать все что угодно.

                        C# входит в семейство C-подобных языков. Туда же входят некоторые другие языки: C++, Java, JavaScript, PHP. Даже если C# не понравится как первый язык, то перейти на другой будет не сложно.</p>
                    <h3>Задание</h3>
                    <p>
                        Наберите в редакторе код из задания символ в символ и нажмите «Проверить».

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

export default FirstLesson;