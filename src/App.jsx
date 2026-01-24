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
        <Project 
          img="/blue&gold.png" 
          title="Blue & Gold Yearbook" 
          description="I developed and maintain UC Berkeley's official yearbook website">
        </Project>
        <Project 
          img="/gdd-logo.png" 
          title="3D Virtual Showroom" 
          description="A 3D website made to showcase games developed by students from UC Berkeley's Video Game Design and Development club">
        </Project>
        <Project 
          img="/github.png" 
          title="Gitlet" 
          description="A version-control system mimicking the basic features of the popular system Git. This system supports commits, git log, branches, and merging.">
        </Project>
      </div>

      <div class="section-container">
        <h2 class="section-title">Experience</h2>
        <Experience
          img="/broctagon.png"
          company="Broctagon"
          description="Singapore based fintech company"
          location="Singapore"
        ></Experience>

         <Experience
          img="/yuabread.png"
          company="YuaBread, Inc."
          description="Bread delivery service for local bakeries in Japan"
          location="Tokyo, Japan"
        ></Experience>
      </div>
    </>
  )
}

export default App
  