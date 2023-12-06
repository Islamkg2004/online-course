import React from 'react';
import Container from "../container/Container";
import classes from './share.module.css'
import first from '../../images/share/first.png'
import second from  '../../images/share/second.png'
import thrind from '../../images/share/three.png'
import four from  '../../images/share/four.png'
import Text from "../text/Text";


function Share() {
    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.inner}>
                        <div className={classes.left}>
                            <Text
                                textSpan="STEP 1"
                                textH2="Предлагаем план и развития."
                                text="зарегистрируйся, чтобы присоединиться к онлайн-классам. зарегистрируйтесь в своей учетной записи электронной почты и отправьте сейчас."
                            />
                            <img className={classes.second} src={second} alt=""/>
                            <Text
                                textSpan="STEP 3"
                                textH2="Учитесь на практике."
                                text="В любом деле, чем раньше начинаешь решать практические задачи, тем быстрее продвигается обучение. Даже если вы прочитаете целую книгу, и она покажется вам легкой, когда дело дойдет до реального кода, у вас начнутся проблемы."
                            />
                            <img className={classes.four} src={four} alt=""/>
                        </div>
                        <div className={classes.right}>
                            <img className={classes.first} src={first} alt=""/>
                            <Text
                                textSpan="STEP 2"
                                textH2="Изучите основы, которые всегда будут актуальны."
                                text="Основы программирования актуальны для самых различных областей — от машинного обучения до создания игр. Изучив основы, легко можно разобраться в более продвинутых концепциях программирования."
                            />
                            <img className={classes.thrind} src={thrind} alt=""/>
                            <Text
                                textSpan="STEP 4"
                                textH2="Ищите больше ресурсов для обучения."
                                text="Ресурсов для изучения программирования очень много: книги, онлайн-курсы, видеоуроки, статьи и т. д. Даже в самой хорошей книге какое-то понятие может объясняться поверхностно. Не бойтесь использовать различные ресурсы, если не понятно объяснение в книге, найдите видео или статью."
                            />
                        </div>
                    </div>
                </Container>

            </div>
        </>

    );
}

export default Share;