import React from 'react';
import classes from './Button.module.css'
function Button({text,handleClick }) {
    return (
        <div>
            <button className={classes.button} onClick={handleClick}>
                <p className={classes.text}>
                    {text}
                </p>
            </button>
        </div>
    );
}

export default Button;