// About.js
import React from 'react';
import '/stylesheet/About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Meet our distinguished instructor for the Diploma in Computer Applications.</p>
      </div>
      <div className="about-content">
        <div className="teacher-profile">
          <img src="data:image/jpeg;base64,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" alt="Mr.Gaurav" className="teacher-image" />
          <h2>Mr. Gaurav </h2>
          <p className="teacher-subtitle">Diploma in Computer Applications Instructor</p>
          <div className="education-achievements">
            <div className="education">
              <h3>Education</h3>
              <ul>
                <li>BSc in Computer Science, Tech University</li>
                <li>Masters in Information Systems, InfoTech University</li>
                <li>Certified Professional in Data Analysis</li>
              </ul>
            </div>
            <div className="achievements">
              <h3>Achievements</h3>
              <ul>
                <li>Published 15+ papers in reputed journals on computer applications</li>
                <li>Recipient of the “Best Educator Award” at Tech Conference 2023</li>
                <li>Developed a widely used educational software for practical training</li>
                <li>Keynote Speaker at National Seminar on Computer Applications</li>
              </ul>
            </div>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <p>
              Expertise in programming languages (Python,  php), Ms-excel, Ms-word, coreldraw, adobe, tally, etc.
              Passionate about hands-on teaching and fostering student engagement through innovative methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;