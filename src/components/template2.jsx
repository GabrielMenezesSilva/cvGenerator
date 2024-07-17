import React from "react";

function Template2({ person }) {
  return (
    <div className="template2-container">
      <header className="template2-header">
        <div className="template2-photo">
          <img src="./images/photo.jpeg" alt="Profile Photo" />
        </div>
        <div className="template2-contact-info">
          <h1>Gabriel Menezes</h1>
          <p>
            10 Place du metral - 1226 Thonex | +41 78 3187609 |
            mrgabrielmenezes@icloud.com
          </p>
        </div>
      </header>
      <section className="template2-profile">
        <h2>Developer Full Stack</h2>
        <p>A highly motivated and experienced professional...</p>
      </section>
      <section className="template2-experience">
        <h2>Experience</h2>
        <div className="template2-job">
          <h3>Job Title</h3>
          <p>Company Name, City, Dates</p>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
      </section>
      <section className="template2-education">
        <h2>Education</h2>
        <div className="template2-school">
          <h3>Degree</h3>
          <p>School Name, City, Dates</p>
        </div>
      </section>
      <section className="template2-skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
    </div>
  );
}
export default Template2;
