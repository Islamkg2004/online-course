import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function One(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>переменная</h3>
                        <p>В простейшем случае так и стоит поступить, но если фраза Father! начнет использоваться чаще, да еще и в разных частях программы, то придется ее везде повторять. Проблемы с таким подходом начнутся тогда, когда понадобится изменить нашу фразу, а такое происходит довольно часто. Нам придется найти все места где использовалось фраза Father! и выполнить необходимую замену. А можно поступить по другому. Вместо копирования нашего выражения, достаточно создать переменную с этой фразой.Когда переменная создана, можно начать её использовать. Она подставляется в те места, где раньше стояла наша фраза. Во время выполнения кода, в строке Console.WriteLine(greeting) вместо переменной подставляется её содержимое, а затем выполняется код. В результате вывод нашей программы будет таким:

                            Нельзя давать переменных имена, совпадающие с ключевыми словами языка. Это зарезервированные слова, которые имеют особое значение для компилятора. Одно ключевое слово мы уже использовали – это var. С некоторыми другими мы познакомимся в следующих уроках. Если все же очень нужно дать имя переменной из списка ключевых слов, то в C# есть специальный символ экранирования имен – @. .</p>
                        <h3>Задание</h3>
                        <p>
                            Создайте переменную с именем motto и содержимым What Is Dead May Never Die!. Распечатайте содержимое переменной.
                        </p>
                    </div>
                    <div className={classes.right}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=JD3Ois6i298&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=5&ab_channel=%23SimpleCode' light={true} controls={true}  width="626px"/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}

export default One;