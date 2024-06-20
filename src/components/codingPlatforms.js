import React from 'react';
import './codingPlatforms.css';
import Platform from './myCodingPlatforms/platforms';
import leetcodeImg from '../images/leetcode.png';
import gfgImg from '../images/gfg.png';
import hackerrankImg from '../images/hackerrank.png';
import codeforcesImg from '../images/codeforces.png';
import codechefImg from '../images/codechef.png';
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png'

function codingPlatforms() {
  return (
    <div className='codingPlatforms'>
        <h1>Platforms Profile</h1>
        <div className='platformNames'>
          <Platform img={leetcodeImg} name={"Leetcode"} link={"https://leetcode.com/u/teenaupadhyay/"}></Platform>
          <Platform img={gfgImg} name={"GFG"} link={"https://www.geeksforgeeks.org/user/teenaupadhbom/"}></Platform>
         {/* <Platform img={hackerrankImg} name={"HackerRank"} link={"https://www.hackerrank.com/prashantpathak61"}></Platform> */}
          <Platform img={codeforcesImg} name={"CodeForces"} link={"https://codeforces.com/profile/Teenaupadhyay"}></Platform>
          {/* <Platform img={codechefImg} name={"CodeChef"} link={"https://www.codechef.com/users/prashant_0_1"}></Platform> */}
          <Platform img={githubImg} name={"GitHub"} link={"https://github.com/teenaupadhyay"}></Platform>
          <Platform img={linkedinImg} name={"LinkedIn"} link={"https://www.linkedin.com/in/teena-upadhyay-254718250/"}></Platform>

        </div>
    </div>
  )
}

export default codingPlatforms