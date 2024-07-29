import React, { useState, useEffect } from "react";

function formTemplate2({ person, setPerson }) {

  const [listExp2, setListExp2] = useState([]);

  function ajoutExp2(e) {
    e.preventDefault();
    const exp = {
      experience2: person.experience2,
      adressEntreprise2: person.adressEntreprise2,
      dateDebut2: person.dateDebut2,
      dateFin2: person.dateFin2,
      positionExp2: person.positionExp2,
      description2: person.descriptionExp2,
    };
    setListExp2((prevList2) => [...prevList2, exp]);
    setPerson({
      ...person,
      experience2: "",
      adressEntreprise2: "",
      dateDebut2: "",
      dateFin2: "",
      positionExp2: "",
      descriptionExp2: "",
    });
  }

  const [listEdu2, setListEdu2] = useState([]);
  function ajoutForm2(e) {
    e.preventDefault();
    const form = {
      institutionFormation2: person.institutionFormation2,
      adressFormation2: person.adressFormation2,
      graduationDateFormation2: person.graduationDateFormation2,
      diplomeFormation2: person.diplomeFormation2,
    };

    setListEdu2((prevList) => [...prevList, form]);
    setPerson({
      ...person,
      institutionFormation2: "",
      adressFormation2: "",
      graduationDateFormation2: "",
      diplomeFormation2: "",
    });
  }

  useEffect(() => {
    setPerson({ ...person, listExp2: listExp2 });
  }, [listExp2]);

  useEffect(() => {
    setPerson({ ...person, listEdu2: listEdu2 });
  }, [listEdu2]);

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPerson({ ...person, profilePhoto: file });
  };

  return (
    <div>
      <form id="cv-form">
        {/**---------------------------------- ABOUT ME----------------------------------*/}

        <h2>ABOUT ME</h2>

        <label forhtml="photo">Profile Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/jpeg"
          onChange={handlePhotoChange}
        />

        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name2}
          onChange={(e) => {
            setPerson({ ...person, name2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="adress">Adress:</label>
        <input
          type="text"
          id="adress"
          name="adress"
          value={person.adress2}
          onChange={(e) => {
            setPerson({ ...person, adress2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={person.phone2}
          onChange={(e) => {
            setPerson({ ...person, phone2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={person.email2}
          onChange={(e) => {
            setPerson({ ...person, email2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={person.position2}
          onChange={(e) => {
            setPerson({ ...person, position2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={person.description2}
          onChange={(e) => {
            setPerson({ ...person, description2: e.target.value });
          }}
        />
        {/**---------------------------------- EXPERIENCE ----------------------------------*/}
        <br />
        <h2>Expérience</h2>
        {/**---------------------------------- EXPERIENCE 1 ----------------------------------*/}

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
        <button onClick={ajoutExp2}>Ajouter plus experiences</button>
        <br />
        {/*-----------------------------EDUCATION-------------------------- */}

        <h2>Formation</h2>
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={person.institutionFormation2}
          onChange={(e) => {
            setPerson({ ...person, institutionFormation2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="degree">Adress:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={person.adressFormation2}
          onChange={(e) => {
            setPerson({ ...person, adressFormation2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="graduation-date">Graduation Date:</label>
        <input
          type="date"
          id="graduation-date"
          name="graduation-date"
          value={person.graduationDateFormation2}
          onChange={(e) => {
            setPerson({ ...person, graduationDateFormation2: e.target.value });
          }}
        />
        <br />
        <label htmlFor="relevant-courses">Diplome:</label>
        <input
          type="text"
          id="relevant-courses"
          name="relevant-courses"
          value={person.diplomeFormation2}
          onChange={(e) => {
            setPerson({ ...person, diplomeFormation2: e.target.value });
          }}
        />
        <button onClick={ajoutForm2}>Ajouter plus Formations</button>
        <br />
        {/*-----------------------------FIM EDUCATION-------------------------- */}
        <h2>Skills</h2>
        <label htmlFor="technical-skills">Technical Skills:</label>
        <textarea
          id="technical-skills"
          name="technical-skills"
          value={person.technicalSkills2}
          onChange={(e) => {
            setPerson({ ...person, technicalSkills2: e.target.value });
          }}
        ></textarea>
        <br />
        <label htmlFor="language-skills">Language Skills:</label>
        <textarea
          id="language-skills"
          name="language-skills"
          value={person.languageSkills2}
          onChange={(e) => {
            setPerson({ ...person, languageSkills2: e.target.value });
          }}
        ></textarea>
        <br />

      </form>
    </div>
  );
}

export default formTemplate2;
