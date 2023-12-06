import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Fiivee(props) {
    return (
        <>
            <Container>
                <Header/>
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <h3>Создание (определение) метода</h3>
                        <p>Определение собственных методов значительно упрощает написание и поддержку программ. Методы позволяют объединять сложные (составные) операции в одну. Например, отправка письма на сайте - это достаточно сложный процесс, включающий в себя взаимодействие с внешними системами (интернет). Благодаря возможности определять методы, вся сложность может быть скрыта за одним простым методом: ДКласс объявляется через ключевое слово class, за которым следует имя создаваемого класса App. Потом идут фигурные скобки {} между которыми идет наполнение этого класса. Проще всего воспринимать класс как "контейнер" для методов. Представьте себе ящик с инструментами (класс) в котором лежат нужные инструменты (методы).

                            Console.WriteLine("Hello");
                            // Console – "контейнер" для инструментов работы с консолью
                            // WriteLine() – "инструмент" для вывода информации в консоль
                            Помимо WriteLine() в Console есть и другие свойства и методы. Попробуйте найти в документации что еще можно делать через этот класс.

                            .</p>
                        <h3>Задание</h3>
                        <p>
                            еализуйте класс App со статическим методом с именем PrintMotto(), который выведет на экран фразу Winter is coming. Тесты будут вызывать ваш код вот так:

                            App.PrintMotto(); // => Winter is coming
                            Чтобы мы могли вызвать этот метод снаружи, нужно его пометить не только ключевым словом static, но еще и public.
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

export default Fiivee;