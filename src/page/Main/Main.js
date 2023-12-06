import React from 'react';
import one from "../../images/Mentor/one.png";
import two from "../../images/Mentor/two.png";
import thrind from "../../images/Mentor/thrind.png";
import four from "../../images/Mentor/four.png";
import icon from "../../images/done.svg";
import Master from "../../componets/Master/Master";
import HowTo from "../../componets/howTo/HowTo";
import Community from "../../componets/community/Community";
import Share from "../../componets/share/Share";
import Mentor from "../../componets/Mentor/Mentor";
import Comments from "../../componets/Comments/Comments";
import Question from "../../componets/ Question/Question";
import Footer from "../../componets/Footer/Footer";
function Main() {
    const mentorTask = [
        {
            img:  one,
            name: 'Mr. Sandi Tofang',
            position: 'Mentoring ',
            profesion: 'Artist class',
            id:1
        },
        {
            img:  two,
            name: 'Mr. Sandi Tofang',
            position: 'Mentoring ',
            profesion: 'Artist class',
            id:2
        },
        {
            img:  thrind,
            name: 'Mr. Sandi Tofang',
            position: 'Mentoring ',
            profesion: 'Artist class',
            id:3
        },
        {
            img:  four,
            name: 'Mr. Sandi Tofang',
            position: 'Mentoring ',
            profesion: 'Artist class',
            id:4
        }
    ]

    const  howTask =  [
        {
            id:1,
            title: 'Смотрите на любом устройстве',
            img: icon
        },
        {
            id:2,
            title: 'Учеба 24/7',
            img: icon
        },
        {
            id:3,
            title: 'Многоуровневая платформа',
            img: icon
        },

    ]

    return (
        <>
            <Master/>
            <HowTo
                list={howTask}
            />
            <Community/>
            <Share/>
            <Mentor
                list={mentorTask}
            />
            <Comments/>
            <Question/>
            <Footer/>


        </>
    );
}

export default Main;