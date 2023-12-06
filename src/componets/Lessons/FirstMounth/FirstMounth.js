import React from 'react';
import Container from "../../container/Container";
import first from  '../../../images/Course/pexels-alesia-kozik-6770774.png'
import one from '../../../images/Blog/ccc).jpeg'
import classes from './first.module.css'
import back from '../../../images/Lessons/back.jpeg'
import two from '../../../images/Lessons/fac.jpeg'
import three from '../../../images/Lessons/images.jpeg'
import  four from  '../../../images/Lessons/imagesas).jpeg'
import {Link} from "react-router-dom";
function FirstMounth() {
    return (
        <>
            <Container>
                <div className={classes.inner}>
                    <h2 className={classes.text}>1 Месяц</h2>
                    <div className={classes.line}></div>
                    <div className={classes.first}>
                        <Link to='/course/basic'>
                            <div className={classes.item}>
                                <img src={first} alt=""/>
                                <h3>Основы C#</h3>
                            </div>
                        </Link>
                          <Link to='/course/arifmetika'>
                              <div className={classes.item}>
                                  <img src={one} alt=""/>
                                  <h3>Арифметика</h3>
                              </div>
                          </Link>
                           <Link to='/course/operatory'>
                               <div className={classes.item}>
                                   <img src={back} alt=""/>
                                   <h3>Операторы</h3>
                               </div>
                           </Link>

                         <Link to='/course/comboOpera'>
                             <div className={classes.item}>
                                 <img src={two} alt=""/>
                                 <h3>Композиция операций</h3>
                             </div>
                         </Link>
                           <Link to='/course/priotetOper'>
                               <div className={classes.item}>
                                   <img src={four} alt=""/>
                                   <h3>Приоритет операций</h3>
                               </div>
                           </Link>
                    </div>

                </div>
            </Container>

        </>
    );
}

export default FirstMounth;