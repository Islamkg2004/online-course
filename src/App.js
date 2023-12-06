import './App.css';
import { Route,Routes} from "react-router-dom";
import Main from "./page/Main/Main";
import Course from "./page/Course/Course";
import Blog from "./page/Blog/Blog";
import React from "react";
import FirstPost from "./page/Post/FirstPost/FirstPost";
import SecondPost from "./page/Post/SecondPost/SecondPost";
import TrindPost from "./page/Post/ThrindPost/TrindPost";
import FirstLesson from "./componets/Lessons/FirstMounth/LessonPart/FirstLesson";
import SecondLesson from "./componets/Lessons/FirstMounth/LessonPart/SecondLesson";
import Thrid from "./componets/Lessons/FirstMounth/LessonPart/Thrid";
import Four from "./componets/Lessons/FirstMounth/LessonPart/Four";
import Five from "./componets/Lessons/FirstMounth/LessonPart/Five";
import Weather from "./page/Weather/Weather";
import TodoList from "./page/TodoList/TodoList";
import Calculaot from "./page/Calculator/Calculaot";
import Tictac from "./page/Tictac/Tictac";
import One from "./componets/Lessons/SecondMounth/lessonPart/One";
import Two from "./componets/Lessons/SecondMounth/lessonPart/Two";
import Three from "./componets/Lessons/SecondMounth/lessonPart/Three";
import Fourr from "./componets/Lessons/SecondMounth/lessonPart/Fourr";
import Fiivee from "./componets/Lessons/SecondMounth/lessonPart/Fiivee";
import Yslovne from "./componets/Lessons/ThirdMounth/LessonPart/Yslovne";
import Iff from "./componets/Lessons/ThirdMounth/LessonPart/Iff";
import Eelse from "./componets/Lessons/ThirdMounth/LessonPart/Eelse";
import Ternarny from "./componets/Lessons/ThirdMounth/LessonPart/Ternarny";
import Sswitch from "./componets/Lessons/ThirdMounth/LessonPart/Sswitch";
import Forr from "./componets/Lessons/FourMounth/lessonPart/Forr";
import SData from "./componets/Lessons/FourMounth/lessonPart/SData";
import Formirovania from "./componets/Lessons/FourMounth/lessonPart/Formirovania";
import WWhile from "./componets/Lessons/FourMounth/lessonPart/WWhile";
import Yslocia from "./componets/Lessons/FourMounth/lessonPart/Yslocia";
function App() {
  return (

           <>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/blog"  element={<Blog/>}/>
                <Route path='/course' element={<Course/>}/>
                <Route path='/blog/first' element={<FirstPost/>}/>
                <Route path='/blog/second' element={<SecondPost/>}/>
                <Route path='/blog/thrind' element={<TrindPost/>}/>
                <Route path='/'/>
                <Route path='/course/basic' element={<FirstLesson/>}/>
                <Route path='/course/arifmetika' element={<SecondLesson/>}/>
                <Route path='/course/operatory' element={<Thrid/>}/>
                <Route path='/course/comboOpera' element={<Four/>}/>
                <Route path='/course/priotetOper' element={<Five/>}/>
                <Route path='/course/peremene' element={<One/>}/>
                <Route path='/course/type' element={<Two/>}/>
                <Route path='/course/method' element={<Three/>}/>
                <Route path='/course/cypemethod' element={<Fourr/>}/>
                <Route path='/course/oprdelene' element={<Fiivee/>}/>
                <Route path='/course/yslovnse' element={<Yslovne/>}/>
                <Route path='/course/if-else' element={<Iff/>}/>
                <Route path='/course/else-if' element={<Eelse/>}/>
                <Route path='/course/ternarny' element={<Ternarny/>}/>
                <Route path='/course/switch' element={<Sswitch/>}/>
                <Route path='/course/while' element={<WWhile/>}/>
                <Route path='/course/data' element={<SData/>}/>
                <Route path='/course/yslocia' element={<Yslocia/>}/>
                <Route path='/course/formirovania' element={<Formirovania/>}/>
                <Route path='/course/for' element={<Forr/>}/>
                <Route path='/course/pogoda' element={<Weather/>}/>
                <Route path='/course/TODOLIST' element={<TodoList/>}/>
                <Route path='/course/calculator' element={<Calculaot/>}/>
                <Route path='/course/Tictac' element={<Tictac/>}/>

            </Routes>
           </>
  );
}

export default App;
