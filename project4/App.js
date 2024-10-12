import React, { useState } from 'react';
import './App.css';
import myImage from './pic/dp.png';
import myimage from './pic/resume.png';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <header>
        <h1>KEERTANA NATARAJAN</h1>
        <nav>
          <button onClick={() => handleButtonClick('photography')}>PHOTOGRAPHY</button>
          <button onClick={() => handleButtonClick('resume')}>COVER LETTER AND RESUME</button>
          <button onClick={() => handleButtonClick('internships')}>INTERNSHIPS</button>
          <button onClick={() => handleButtonClick('projects')}>PROJECTS</button>
          <button onClick={() => handleButtonClick('certifications')}>CERTIFICATIONS</button>
          <button onClick={() => handleButtonClick('achievements')}>ACHIEVEMENTS</button>
          <button onClick={() => handleButtonClick('about')}>ABOUT ME</button>
        </nav>
      </header>
      <main>
        {activeSection === 'photography' && (
          <div className="content">
            <h2>Photography</h2>
            <img src={myImage} alt="C:\Users\natar\OneDrive\Desktop\React\game\src\pic\dp.png" /> 
        )}
        {activeSection === 'resume' && (
          <div className="content">
            <h2>Cover Letter and Resume</h2>
           
            <img src={myimage} alt="C:\Users\natar\OneDrive\Desktop\React\game\src\pic\resume.png"S />
          </div>
        )}
        {activeSection === 'internships' && (
          <div className="content">
            <h2>Internships</h2>
            <h3>1)Embedded Electronics Intern</h3>
            <h4>Siliconz Embedded Solutions
(May 2024 - June 2024)</h4>

<p>Assisted in schematic analysis and testing of electronic circuits.
Conducted functionality tests on over 100 PCB boards.</p>
<p>Gained experience in C programming for Arduino projects.</p>


<h3>2)Student Intern</h3>
<h4>QMAX Test Equipments Pvt Ltd
(March 2024 - April 2024)</h4>

<p>Conducted hands-on testing of electronic components using IIT Madras-designed kits.</p>
<p>Validated the operation of transistors, sensors, and power links.</p>
<p>Developed practical skills in circuit analysis using multimeters and oscilloscopes.</p>
          </div>
        )}
        {activeSection === 'projects' && (
          <div className="content">
            <h2>Projects</h2>
            <h3>Greywater Management System</h3>
            <p>•Developed a system to collect and filter used household water.</p>
            <p>•Integrated UV light treatment and natural filters for water reuse.</p>
            <p>•Designed sensors for monitoring water quality to ensure safety.</p>
            <h3>Smart Drainage Level Monitoring and Notification System</h3>
            <p>•Created a real-time drainage level monitoring system.</p>
            <p>•Integrated water level sensors and cloud database for alerts.</p>
            <p>•Developed a web interface for local corporations for quick response.</p>
            
          </div>
        )}
        {activeSection === 'certifications' && (
          <div className="content">
            <h2>Certifications</h2>
            <ul>
              <li>•	SQL (Basic and Intermediate) - HackerRank</li>
              <li>•	Python (Basic) - HackerRank</li>
              <li>•	Matlab OnRamp - Mathworks</li>
              <li>•	C Training - Spoken Tutorial IIT Bombay, Score: 85%</li>
              <li>•	The Arduino Platform and C Programming - Coursera</li>
            </ul>
          </div>
        )}
        {activeSection === 'achievements' && (
          <div className="content">
            <h2>Achievements</h2>
           <p> • FIRST PLACE IN TECHNICAL SYMPOSIUM: Awarded for presenting an innovative project in a national-level technical symposium organized by the ECE department.</p>

           <p>• CERTIFICATION IN PYTHON PROGRAMMING: Completed a structured course from Pantech e Learning, enhancing programming skills and applying them to real-world projects.</p>

           <p>• ELECTRONICS TESTING PROFICIENCY: Successfully validated multiple electronic components during the internship at QMAX Test Equipments, gaining hands-on experience.</p>
          </div>
        )}
        {activeSection === 'about' && (
          <div className="content">
            <h2>About Me</h2>
            <p>I am Keertana Natarajan, a passionate Electronics and Communication Engineering student at St. Joseph's College of Engineering. My interests lie in embedded systems, machine learning, and networking. I enjoy solving complex problems and am constantly seeking opportunities to enhance my skills through hands-on projects and internships.</p>

            <p>I have completed internships at Siliconz Embedded Solutions and QMAX Test Equipments, where I gained practical experience in electronic circuit design and testing. I have also been actively involved in various technical projects, including a greywater management system and a smart drainage level monitoring system.</p>

            <p>In my free time, I enjoy learning about emerging technologies and participating in tech-related events. I believe in lifelong learning and am excited about the future of technology and its potential to make a positive impact.</p>
            <h3>CONTACT</h3>
            <h4>MAIL:</h4>
            <p>keertana@gmail.com</p>
            <h4>LINKEDIN:</h4>
            <p>https://www.linkedin.com/in/keertana-natarajan</p>
            <h4>GITHUB:</h4>
            <p>https://github.com/KeertanaNatarajan</p>
            <h4>PHONE NUMBER:</h4>
            <p>1234567890</p>

          </div>
        )}
      </main>
    </div>
  );
}

export default App;
