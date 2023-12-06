import React from 'react';
import Container from "../container/Container";
import classes from './Footer.module.css'
function Footer() {

    return (
        <>
         <div className={classes.wrapper}>
             <Container>
                 <div className={classes.inner}>
                     <h2>Edumena</h2>
                     <div className={classes.name}>
                         <p>123 Market St. #22B
                             Charlottesville, California 44635</p>
                         <p>(434) 546-4356</p>
                         <p>contact@edumena.org</p>

                     </div>
                     <div className={classes.midle}>

                     </div>
                     <div className={classes.social}>
                         <ul>
                             <li>
                                 <a href="https://www.facebook.com/">Facebook</a>
                             </li>
                             <li>
                                 <a href="https://twitter.com/?lang=ru">Twitter</a>
                             </li>
                             <li>
                                 <a href="https://ru.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">Linkedin</a>
                             </li>
                             <li>
                                 <a href="https://www.instagram.com/">Instagram</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </Container>
         </div>

        </>
    );
}

export default Footer;