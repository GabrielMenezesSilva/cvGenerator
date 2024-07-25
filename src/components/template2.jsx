import React, { useState } from "react";

function Template2({ person }) {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPerson({ ...person, profilePhoto: file });
  };
  return (
    <div className="template2-container">
      <header className="template2-header">
        <div className="template2-photo">
          <img
            src={
              person.profilePhoto
                ? URL.createObjectURL(person.profilePhoto)
                : ""
            }
            alt="Photo de Profil"
          />
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
      <section className="template2-profile"></section>
      <section className="template2-experience">
        <h2>Experiences</h2>
        {person.listExp2?.map((exp, index) => (
          <div key={index} className="template2-job">
            <h4>{exp.positionExp2}</h4>
            <p>
              {exp.experience2}, {exp.adressEntreprise2}, {exp.dateDebut2} -{" "}
              {exp.dateFin2}
            </p>
            <p>{exp.descriptionExp2}</p>
          </div>
        ))}
      </section>
      <section className="template2-education">
        <h2>Education</h2>
        {person.listEdu2?.map((edu, index) => (
          <div key={index} className="template2-school">
            <h3>{edu.diplomeFormation2}</h3>
            <p>
              {edu.institutionFormation2}, {edu.adressFormation2},{" "}
              {edu.graduationDateFormation2}{" "}
            </p>
          </div>
        ))}
      </section>
      <section className="template2-skills">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skills__item">
            <div className="left">
              <div className="name">{person.technicalSkills2}</div>
            </div>
            <div className="right"></div>
          </div>
        </div>{" "}
      </section>
      <div className="section">
        <div className="section__title">
          <h2>Language Skills</h2>
        </div>
        <div className="section__list">
          <div className="section__list-item">{person.languageSkills2}</div>
        </div>
      </div>
    </div>
  );
}

export default Template2;
