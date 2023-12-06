import React from 'react';
import {DefaultPlayer as Video} from "react-html5video";
import 'react-html5video/dist/styles.css'
import introvideo from '../video/basic.mp4'
import photo from '../../images/Blog/С#.jpeg'
function Player(props) {
    return (
        <>
            <Video autoPlay loop
                   poster={photo}
                   onCanPlayThrough={()=>{
                       console.log("video-player")
                   }}
            >
            </Video>
            <source  src={introvideo} type='video/webm'/>

        </>
    );
}

export default Player;