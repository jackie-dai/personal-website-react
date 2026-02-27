import { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router";
import './App.css'
import Header from './components/header.jsx'
import Project from "./components/project.jsx"
import Experience from "./components/experience.jsx"

function App() {
  const [age, setAge] = useState(21)
  const DOB = new Date("07 April 2004 14:48");
  const milliPerYear = 1000 * 60 * 60 * 24 * 365.2425;

  function updateAge() {
    let newAge = (Date.now() - DOB.getTime()) / milliPerYear;
    newAge = Math.round(newAge * 1000000) / 1000000;
    setAge(newAge);
  }

   useEffect(() => {
    updateAge();

    const intervalId = setInterval(updateAge, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header style={{width: "40vw"}}></Header>

      <div style={{padding: "0.25rem"}}class="section-container">
        <h2 style={{textAlign: "left"}}>About Me</h2>
        <div id="facts-container">
          <p>• I am {age} years old</p>
          <p>• I play badminton</p>
          <p>• I like <Link to="/photography">photography</Link></p>
        </div>
      </div>

      <div class="section-container">
        <h2 class="section-title">Projects</h2>
        <a href="https://yearbook.studentorg.berkeley.edu/" target="_blank"><Project 
          img="/blue&gold.png" 
          title="Blue & Gold Yearbook" 
          description="I developed and maintain UC Berkeley's official yearbook website">
        </Project>
        </a>
        <Project 
          img="/gdd-logo.png" 
          title="3D Virtual Showroom" 
          description="A 3D website made to showcase games developed by students from UC Berkeley's Video Game Design and Development club">
        </Project>
        <a href="https://jackie-dai.github.io/cs180-webpages/" target="_blank"><Project 
          img="/orapple.png" 
          title="Computer Graphics" 
          description="My projects for CS180: Computer Vision/Computational Photography">
        </Project>
        </a>
      </div>

      <div class="section-container">
        <h2 class="section-title">Experience</h2>
        <Experience
          img="/broctagon.png"
          company="Broctagon"
          position="Software Engineer Intern"
          description="Singapore based fintech company"
          location="Singapore"
        ></Experience>

         <Experience
          img="/yuabread.png"
          company="YuaBread, Inc."
          position="Software Engineer Intern"
          description="Bread delivery service for local bakeries in Japan"
          location="Tokyo, Japan"
        ></Experience>
      </div>
    </>
  )
}

export default App
  