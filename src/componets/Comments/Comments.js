import React from 'react';
import classes from './Comments.module.css'
import Container from "../container/Container";
import one from './images.jpeg'
import two from './two.jpeg'
import three from './three.jpeg'
import four from './four.jpeg'
import five from './five.jpg'
import six from './sex).jpeg'
import seven   from  './seven.jpeg'
import eingt from './eight.jpeg'


function Comments() {






    
    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.inner} >
                        <h2>Фото наших студентов</h2>
                        <p>Фото наших студентов, которые использовали наши функции и работы.</p>
                        <div className={classes.bottom}>
                            <div className={classes.carousel}>
                                <div className={classes.image}>
                                    <img src={one} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={two} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={three} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={four} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={five} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={six} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={seven} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={eingt} alt=""/>
                                </div>
                                <div className={classes.image}>
                                    <img src={three} alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Comments;