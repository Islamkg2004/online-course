import React from 'react';
import Header from "../../componets/header/Header";
import Footer from "../../componets/Footer/Footer";
import SecondMounth from "../../componets/Lessons/SecondMounth/SecondMounth";
import FirstMounth from "../../componets/Lessons/FirstMounth/FirstMounth";
import ThirdMOunth from "../../componets/Lessons/ThirdMounth/ThirdMOunth";
import FourMount from "../../componets/Lessons/FourMounth/FourMount";
import Project from "../../componets/Lessons/Project/Project";
function Course(props) {
    return (
        <div>
            <Header/>
            <FirstMounth/>
            <SecondMounth/>
            <ThirdMOunth/>
            <FourMount/>
            <Project/>
            <Footer/>
        </div>
    );
}

export default Course;