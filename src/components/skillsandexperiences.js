import React from 'react'
import './skillsandexperiences.css'
import Skills from './mySkills/mySkills'
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import jsImg from '../images/javascript.png';
import reactImg from '../images/reactjs.png';
import cImg from '../images/c.png';
import cppImg from '../images/cpp.png';
import pythonImg from '../images/Python.png';
import javaImg from '../images/java.png';
import tailwindImg from '../images/tailwind.png';
import NodeImg from '../images/Nodejs.png';
import ExpressImg from '../images/express-js.png';
import FirebaseImg from '../images/firebase.png';
import MongoDBImg from '../images/mongodb.png';
import PostManImg from '../images/postman.png';
import VSCodeImg from '../images/VScode.png';
import githubImg from '../images/github_round.png';


function skillsandexperiences() {
  return (
        
    <div className='skillsandexperiences'>
        <h1>Skills & Achievements</h1>
        <div className='skillsandexp'>
            <div className='skills'>
                <h1>Skills</h1>
                <div className='skillsList'>
                  <div className='skillsListSections'>
                    <Skills bgimg={javaImg} name={"Java"}></Skills>
                    <Skills bgimg={pythonImg} name={"Python"}></Skills>
                    {/* <Skills bgimg={cppImg} name={"C++"}></Skills> */}
                    <Skills bgimg={cImg} name={"C"}></Skills>
                    <Skills bgimg={jsImg} name={"javaScript"}></Skills>
                  </div>
                  <div className='divider'></div>
                  <div className='skillsListSections'>
                    <Skills bgimg={htmlImg} name={"HTML"}></Skills>
                    <Skills bgimg={cssImg} name={"CSS"}></Skills>
                    <Skills bgimg={reactImg} name={"ReactJS"}></Skills>
                    <Skills bgimg={tailwindImg} name={"Tailwind CSS"}></Skills>
                  </div>
                  <div className='divider'></div>
                  <div className='skillsListSections'>
                    <Skills bgimg={NodeImg} name={"NodeJS"}></Skills>
                    <Skills bgimg={ExpressImg} name={"ExpressJS"}></Skills>
                    <Skills bgimg={MongoDBImg} name={"MongoDB"}></Skills>
                    {/* <Skills bgimg={FirebaseImg} name={"Firebase"}></Skills> */}
                  </div>
                  <div className='divider'></div>
                  <div className='skillsListSections'>
                    <Skills bgimg={VSCodeImg} name={"VS Code"}></Skills>
                    <Skills bgimg={githubImg} name={"Git / Github"}></Skills>
                    {/* <Skills bgimg={PostManImg} name={"Postman"}></Skills> */}
                  </div>
                </div>
                
            </div>
            <div className='Experience'>
              {/*<h1>Experience</h1>*/}
              <h1>Programming Achievements</h1>
              <ul>
                <li>Solved around 300+ DSA problems with the highest rating of 1500+ on LeetCode.</li>
                <li>Ranked 285 among 3300+ competitive programmers in GeeksforGeeks weekly coding contest 139. </li>
                <li>Solved more than 500+ problems across platforms.</li>
                <li>Certified in DSA by coding blocks</li>
                <li>Ranked 3592 among 33000+ Weekly Contest 389 in leetcode. </li>
  
              </ul>
            </div>
        </div>
    </div>
  )
}

export default skillsandexperiences