import React from 'react';
import Container from "../../../container/Container";
import Header from "../../../header/Header";
import classes from "../../FirstMounth/LessonPart/FirstLesson.module.css";
import ReactPlayer from "react-player";
import Footer from "../../../Footer/Footer";

function Two(props) {
    return (

            <>
                <Container>
                    <Header/>
                    <div className={classes.inner}>
                        <div className={classes.left}>
                            <h3>Типы данныхC#</h3>
                            <p>Внутри высокоуровневых языков программирования данные разделяются по типам. Например строки относятся к типу string, а числа — к типу int. Зачем нужны типы? Для защиты программы от трудноотловимых ошибок. Типы определяют две вещи:

                                Возможные (допустимые) значения. Например, числа в C# делятся на две группы типов: int и float. Первые — целые числа, вторые – рациональные. Такое разделение связано с техническими особенностями работы аппаратуры.
                                Набор операций, которые можно выполнять над этим типом. Например, операция умножения имеет смысл для типа «целые числа». Но не имеет смысла для типа «строки»: умножать слово «мама» на слово «блокнот» — бессмыслица.
                                Язык программирования распознает типы. Поэтому C# не позволит нам умножать строку на строку. Но позволит умножать целое число на другое целое число. Наличие типов и таких ограничений в языке защищает программы от случайных ошибок.</p>
                            <h3>Задание</h3>
                            <p>
                                Наберите в редакторе код из задания символ в символ и нажмите «Проверить».

                                Console.WriteLine("Hello, World!");
                            </p>
                        </div>
                        <div className={classes.right}>
                            <ReactPlayer url='https://www.youtube.com/watch?v=YheVyGZbEiY&ab_channel=GenaANTG' light={true} controls={true}  width="626px"/>
                        </div>
                    </div>
                    <Footer/>
                </Container>
            </>

    );
}

export default Two;