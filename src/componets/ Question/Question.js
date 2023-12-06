import React from 'react';
import classes from './Question.module.css'
import Container from "../container/Container";
import Accordion from "../Accordion/Accordion";
function Question() {
    return (
        <>
          <div className={classes.wrapper}>
              <Container>
                  <div className={classes.line}></div>
                  <div className={classes.inner}>
                      <h2>
                          Часто задаваемые вопросы
                      </h2>
                      <p>Просмотрите наши часто задаваемые вопросы ниже, если вы не можете найти ответ на Edumena</p>
                        <Accordion/>
                  </div>
              </Container>
          </div>

        </>
    );
}

export default Question;