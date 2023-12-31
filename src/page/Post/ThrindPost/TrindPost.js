import React from 'react';
import Header from "../../../componets/header/Header";
import Container from "../../../componets/container/Container";
import classes from "../FirstPost/First.module.css";
import photo from "../../../images/Blog/money.jpeg";
import secondPhoto from "../../../images/Blog/С#.jpeg";
import Footer from "../../../componets/Footer/Footer";
function TrindPost(props) {
    return (
        <>
            <Header/>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.first}>
                        <div className={classes.one}></div>
                        <h2>Сколько зарабатывают на C#</h2>
                        <div className={classes.two}> </div>
                    </div>
                    <div className={classes.second}>
                        <div className={classes.left}>
                            <div>
                                <p>13.02.2022</p>
                            </div>
                            <h2>Сколько зарабатывают на C#</h2>
                            <p>Программисты, пишущие на C#, могут получать в России за свою работу до 300 тыс. руб. ежемесячно, притом не только в Москве, но и, например, во Владивостоке или Сочи. Это вдвое больше, чем получают сисадмины Windows, но, по данным Superjob, есть города, где такая профессия не в цене – самые низкие зарплаты у C#-кодеров в Оренбурге, впрочем, как и у сисадминов.</p>
                            <p>В России по состоянию на октябрь 2020 г. наблюдается высокая востребованность программистов, пишущих на языке C#. Такая ситуация наблюдается не только в столичных регионах, но и во многих других крупных городах России.

                                По данным профильного портала Superjob, на фоне высокой востребованности кадров программисты С# из провинциальных городов могут рассчитывать на зарплату, сопоставимую с московской. Для примера, в столице зарплаты таких специалистов стартуют сo 100 тыс. руб., в Санкт-Петербурге и некоторых других мегаполисах – с 80 тыс. руб.

                                Максимальный размер заработка опытного разработчика C# составляет 350 тыс. руб. в Москве и 300 тыс. руб. в Санкт-Петербурге, Владивостоке, Екатеринбурге и Сочи. В других крупных российских городах она варьируется от 210 тыс. руб. до 280 тыс. руб.

                                Наиболее высокий спрос в России наметился на программистов C# с опытом работы от двух лет. Также чаще всего работодателям нужны специалисты с навыками разработки высоконагруженных и многопоточных приложений.</p>
                            <p>
                                Согласно исследованию SuperJob, язык программирования С# почти не интересует соискателей-программистов женского пола. Из 100% программистов, пишущих на нем и желающих получать за это деньги, 73 – мужчины.
                            </p>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.firstPhoto}>
                                <img src={photo} alt=""/>
                            </div>
                            <div>
                                <img src={secondPhoto} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Footer/>
        </>
    );
}

export default TrindPost;