import React, { useEffect } from "react";
import { useState } from "react";

function formComponent({ person, setPerson }) {
  const [listExp, setListExp] = useState([]);

  function ajoutExp(e) {
    e.preventDefault();
    const exp = {
      experience: person.experience,
      adressEntreprise: person.adressEntreprise,
      dateDebut: person.dateDebut,
      dateFin: person.dateFin,
      position: person.positionExp,
      description: person.descriptionExp,
    };
    setListExp((prevList) => [...prevList, exp]);
    setPerson({
      ...person,
      experience: "",
      adressEntreprise: "",
      dateDebut: "",
      dateFin: "",
      positionExp: "",
      descriptionExp: "",
    });
  }
  const [listEdu, setListEdu] = useState([]);
  function ajoutForm(e) {
    e.preventDefault();
    const form = {
      institutionFormation: person.institutionFormation,
      adressFormation:person.adressFormation,
      graduationDateFormation: person.graduationDateFormation,
      diplomeFormation:person.diplomeFormation,
    }

    setListEdu((prevList) => [...prevList, form]);
    setPerson({
      ...person,
      institutionFormation: "",
      adressFormation: "",
      graduationDateFormation: "",
      diplomeFormation: "",
      });
  }
  useEffect(() => {
    setPerson({...person, listEdu: listEdu})
  }, [listEdu])

  //TODO - Aprender oq é um UseEffect
  useEffect(() => {
    setPerson({ ...person, listExp: listExp });
  }, [listExp]);

  return (
    <div>
      <form id="cv-form">
        {/**---------------------------------- ABOUT ME----------------------------------*/}
        
        <h2>About Me</h2>
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
        <button onClick={ajoutExp}>Ajouter plus experiences</button>

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
        <button onClick={ajoutForm}>Ajouter plus Formations</button>
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

      </form>
    </div>
  );
}

export default formComponent;
