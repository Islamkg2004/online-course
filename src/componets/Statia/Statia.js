import React from 'react';
import './Statia.css'
import blog_image from '../../images/Blog/С#.jpeg'
import money from  '../../images/Blog/money.jpeg'
import second from  '../../images/Blog/ccc).jpeg'
import Container from "../container/Container";
import {Link} from "react-router-dom";
function Statia(props) {
    return (
        <>
            <Container>
                <div className="blog_inner_item">
                    <div className="blog_inner_item_left">
                        <img src={blog_image} alt=""/>
                    </div>
                    <div className="blog_inner_item_right">
                        <div className="blog_inner_item_right_datas">
                            <p>13.02.2022</p>
                        </div>
                        <h2>История, возможности и перспективы C#</h2>
                        <p>С# («Си Шарп») – один из наиболее быстро растущих, востребованных и при этом «удобных»  языков программирования. Это модификация фундаментального языка С от компании Microsoft, призванная создать наиболее универсальное средство для разработки программного обеспечения для большого количества устройств и операционных систем. С# популярен за счет своей «простоты». Простоты для современных программистов и больших команд разработчиков, чтобы те могли в сжатые сроки создавать функциональные и производительные приложения. Этому способствуют нетипичные конструкции языка и специфичный синтаксис, помогающий максимально органично реализовать намеченные функции.</p>
                        <button>
                            <Link to='/blog/first'>
                                Читать статью
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="blog_inner_item">
                    <div className="blog_inner_item_left">
                        <img src={second} alt=""/>
                    </div>
                    <div className="blog_inner_item_right">
                        <div className="blog_inner_item_right_datas">
                            <p>13.02.2022</p>
                        </div>
                        <h2>C#: плюсы и минусы язык</h2>
                        <p>C# – это язык программирования от компании Microsoft, разработанный к началу 2000-х годов. Изначально он планировался для создания программ под Windows, а в итоге стал универсальным.Данный ЯП похож на Java, причем бытует мнение, что Майкрософт создали С# потому, что не смогли получить права на Java. Таким образом, он неплохо подходит для начинающих программистов или тех, кто ищет свой первый язык.</p>
                        <button>
                            <Link to='/blog/second'>
                                Читать статью
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="blog_inner_item">
                    <div className="blog_inner_item_left">
                        <img src={money} alt=""/>
                    </div>
                    <div className="blog_inner_item_right">
                        <div className="blog_inner_item_right_datas">
                            <p>13.02.2022</p>
                        </div>
                        <h2>Сколько зарабатывают на C#</h2>
                        <p>Весной 2023 года на hh.ru размещены более 1300 вакансий C#-разработчиков по всей России. Организация контроля качества кода TIOBE в марте 2023-го включила C# в топ-5 самых популярных языков программирования и отметила его бурный рост. Востребованность языка подтверждают и зарплаты специалистов по C#.</p>
                        <button>
                            <Link to='/blog/thrind'>
                                Читать статью
                            </Link>
                        </button>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default Statia;