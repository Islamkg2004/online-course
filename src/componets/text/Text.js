import React from 'react';
import classes from './Text.module.css'
function Text({textH2,textSpan,text}) {
    return (
        <>
            <div className={classes.wrapper}>
                <span className={classes.textSpan}>{textSpan}</span>
                <h2 className={classes.textH2}>{textH2}</h2>
                <p className={classes.text}>{text}</p>
            </div>
        </>
    );
}

export default Text;