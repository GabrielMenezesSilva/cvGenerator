import React from "react";

function Template2({ person }) {
  return (
    <div className="template2-container">
      <header className="template2-header">
        <div className="template2-photo">
          <img src="./images/photo.jpeg" alt="Profile Photo" />
        </div>
        <div className="template2-contact-info">
          <h1>{person.name2}</h1>
          <p>
            {person.adress2} | {person.phone2} | {person.email2}
          </p>
        <h2>{person.position2}</h2>
        <p>{person.description2}</p>
        </div>
      </header>
      <section className="template2-profile">
      </section>
      <section className="template2-experience">
        <h2>Experiences</h2>
        <div className="template2-job">
          <h4>{person.positionExp2}</h4>
          <p>{person.experience2}, {person.adressEntreprise2}, {person.dateDebut2} - {person.dateFin2}</p>
          <p>{person.descriptionExp2}</p>
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
