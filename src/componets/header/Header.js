import React from 'react';
import classes from  './header.module.css'
import Container from "../container/Container";
import Modal from "../Modal/Modal";
import {NavLink} from "react-router-dom";

function Header() {





    return (
        <>
                    <Container>
                        <div className={classes.header}>
                            <div className={classes.header__inner}>

                                <span>Edumena</span>

                                <ul>
                                    <NavLink to='/' className='link'>
                                        <li>Главная</li>
                                    </NavLink>
                                    <NavLink to='/blog' className='link'>
                                        <li> Блог</li>
                                    </NavLink>
                                    <NavLink to='/course' className='link'>
                                        <li>Уроки</li>
                                    </NavLink>



                                </ul>
                             
                                <Modal/>


                            </div>
                        </div>

                    </Container>

        </>
    );
}

export default Header;