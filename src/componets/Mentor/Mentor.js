import React from 'react';
import classes from './Mentor.module.css'
import Container from "../container/Container";
function Mentor({list}) {
    const mentors = list.map((mentor) => (
        <div className={classes.wrap } key={mentor.id}>
            <img src={mentor.img} alt=""/>
            <p >  {mentor.name}</p>
            <span>{mentor.position} {mentor.profesion} </span>



        </div>
    ))

    return (
        <>
         <div className={classes.wrapper}>
             <Container>
                <div className={classes.inner}>
                    <div className={classes.top}>
                            <h2>Mentors доступны 24/7</h2>
                            <p>
                                Наставники по всему миру обучают миллионы участников
                                на Эдумене. Предоставляем инструменты и навыки
                            </p>
                    </div>
                    <div className={classes.bottom}>
                        {mentors}
                    </div>
                </div>
             </Container>
         </div>
        </>
    );
}

export default Mentor;