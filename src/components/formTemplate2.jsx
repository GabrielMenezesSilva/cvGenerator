import React from "react";
import { useState } from "react";

function formTemplate2({ person, setPerson }) {
  const [name, setName] = useState("");
  function changeName(e) {
    setName(e.target.value);
  }
  const [email, setEmail] = useState("");
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  const [phone, setPhone] = useState("");
  function changePhone(e) {
    setPhone(e.target.value);
  }
  const [address, setAddress] = useState("");
  function changeAddress(e) {
    setAddress(e.target.value);
  }
  const [degree, setDegree] = useState("");
  function changeDegree(e) {
    setDegree(e.target.value);
  }
  const [institution, setInstitution] = useState("");
  function changeInstitution(e) {
    setInstitution(e.target.value);
  }
  const [graduationDate, setGraduationDate] = useState("");
  function changeGraduationDate(e) {
    setGraduationDate(e.target.value);
  }
  const [courses, setCourses] = useState("");
  function changeCourses(e) {
    setCourses(e.target.value);
  }
  const [job, setJob] = useState("");
  function changeJob(e) {
    setJob(e.target.value);
  }
  const [company, setCompany] = useState("");
  function changeCompany(e) {
    setCompany(e.target.value);
  }
  const [employment, setEmployment] = useState("");
  function changeEmployment(e) {
    setEmployment(e.target.value);
  }
  const [description, setDescription] = useState("");
  function changeDescription(e) {
    setDescription(e.target.value);
  }
  const [skills, setSkills] = useState("");
  function changeSkills(e) {
    setSkills(e.target.value);
  }
  const [language, setLanguage] = useState("");
  function changeLanguage(e) {
    setLanguage(e.target.value);
  }
  return (
    <div>
      <form id="cv-form">
        {/**---------------------------------- ABOUT ME----------------------------------*/}

        <h2>ABOUT ME</h2>

        <label forhtml="photo">Profile Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/jpeg" />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name}
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={person.email}
          onChange={(e) => {
            setPerson({ ...person, email: e.target.value });
          }}
        />
        <br />

        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={person.phone}
          onChange={(e) => {
            setPerson({ ...person, phone: e.target.value });
          }}
        />
        <br />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={person.position}
          onChange={(e) => {
            setPerson({ ...person, position: e.target.value });
          }}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={person.description}
          onChange={(e) => {
            setPerson({ ...person, description: e.target.value });
          }}
        />
        {/**---------------------------------- EXPERIENCE ----------------------------------*/}
        <br />
        <h2>Expérience</h2>
        {/**---------------------------------- EXPERIENCE 1 ----------------------------------*/}

        <label htmlFor="experience">Entreprise:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.experience}
          onChange={(e) => {
            setPerson({ ...person, experience: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Adress Entreprise:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.adressEntreprise}
          onChange={(e) => {
            setPerson({ ...person, adressEntreprise: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Date de début:</label>
        <input
          type="date"
          id="experience"
          name="experience"
          value={person.dateDebut}
          onChange={(e) => {
            setPerson({ ...person, dateDebut: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Date de fin:</label>
        <input
          type="date"
          id="experience"
          name="experience"
          value={person.dateFin}
          onChange={(e) => {
            setPerson({ ...person, dateFin: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Poste occupé:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.positionExp}
          onChange={(e) => {
            setPerson({ ...person, positionExp: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Description du Travail:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.descriptionExp}
          onChange={(e) => {
            setPerson({ ...person, descriptionExp: e.target.value });
          }}
        />
        <br />
        {/**---------------------------------- EXPERIENCE 2 ----------------------------------*/}
        <h3>Ajouter outres experiences</h3>
        <br />
        <label htmlFor="experience">Entreprise:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.experience2}
          onChange={(e) => {
            setPerson({ ...person, experience2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Adress Entreprise:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.adressEntreprise2}
          onChange={(e) => {
            setPerson({ ...person, adressEntreprise2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Date de début:</label>
        <input
          type="date"
          id="experience"
          name="experience"
          value={person.dateDebut2}
          onChange={(e) => {
            setPerson({ ...person, dateDebut2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Date de fin:</label>
        <input
          type="date"
          id="experience"
          name="experience"
          value={person.dateFin2}
          onChange={(e) => {
            setPerson({ ...person, dateFin2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Poste occupé:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.positionExp2}
          onChange={(e) => {
            setPerson({ ...person, positionExp2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="experience">Description du Travail:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.descriptionExp2}
          onChange={(e) => {
            setPerson({ ...person, descriptionExp2: e.target.value });
          }}
        />
        <br />

        {/**---------------------------------- fin EXPERIENCE 2 ----------------------------------*/}

        {/*-----------------------------EDUCATION-------------------------- */}

        <h2>Formation</h2>
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={person.institutionFormation}
          onChange={(e) => {
            setPerson({ ...person, institutionFormation: e.target.value });
          }}
        />
        <br />
        <label htmlFor="degree">Adress:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={person.adressFormation}
          onChange={(e) => {
            setPerson({ ...person, adressFormation: e.target.value });
          }}
        />
        <br />
        <label htmlFor="graduation-date">Graduation Date:</label>
        <input
          type="date"
          id="graduation-date"
          name="graduation-date"
          value={person.graduationDateFormation}
          onChange={(e) => {
            setPerson({ ...person, graduationDateFormation: e.target.value });
          }}
        />
        <br />
        <label htmlFor="relevant-courses">Diplome:</label>
        <input
          type="text"
          id="relevant-courses"
          name="relevant-courses"
          value={person.diplomeFormation}
          onChange={(e) => {
            setPerson({ ...person, diplomeFormation: e.target.value });
          }}
        />
        <br />
        {/*-----------------------------FIM EDUCATION-------------------------- */}
        <h2>Skills</h2>
        <label htmlFor="technical-skills">Technical Skills:</label>
        <textarea
          id="technical-skills"
          name="technical-skills"
          value={person.technicalSkills}
          onChange={(e) => {
            setPerson({ ...person, technicalSkills: e.target.value });
          }}
        ></textarea>
        <br />
        {skills}
        <br />
        <label htmlFor="language-skills">Language Skills:</label>
        <textarea
          id="language-skills"
          name="language-skills"
          value={person.languageSkills}
          onChange={(e) => {
            setPerson({ ...person, languageSkills: e.target.value });
          }}
        ></textarea>
        <br />

        <input type="submit" value="Download PDF" />
      </form>
    </div>
  );
}

export default formTemplate2;
