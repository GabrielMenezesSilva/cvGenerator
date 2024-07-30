import React, { useState, useEffect } from "react";

function FormTemplate2({ person, setPerson }) {

  const [listExp2, setListExp2] = useState([]);
  const [listEdu2, setListEdu2] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Adiciona uma nova experiência à lista
  function ajoutExp2(e) {
    e.preventDefault();
    const exp = {
      experience2: person.experience2,
      adressEntreprise2: person.adressEntreprise2,
      dateDebut2: person.dateDebut2,
      dateFin2: person.dateFin2,
      positionExp2: person.positionExp2,
      description2: person.description2,
    };
    setListExp2((prevList) => [...prevList, exp]);
    setPerson({
      ...person,
      experience2: "",
      adressEntreprise2: "",
      dateDebut2: "",
      dateFin2: "",
      positionExp2: "",
      description2: "",
    });
  }

  // Adiciona uma nova formação à lista
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

  // Atualiza o estado 'person' com a lista de experiências sempre que 'listExp2' muda
  useEffect(() => {
    setPerson({ ...person, listExp2: listExp2 });
  }, [listExp2]);

  // Atualiza o estado 'person' com a lista de formações sempre que 'listEdu2' muda
  useEffect(() => {
    setPerson({ ...person, listEdu2: listEdu2 });
  }, [listEdu2]);

  // Manipula a mudança na foto de perfil
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/jpeg") {
      setProfilePhoto(file);
      setPerson({ ...person, profilePhoto: file });
    } else {
      alert("Please upload a JPEG image.");
    }
  };

  const today = new Date().toISOString().split('T')[0]; // Data atual no formato YYYY-MM-DD

  return (
    <div>
      <form id="cv-form">
        {/**---------------------------------- ABOUT ME ----------------------------------*/}
        <h2>À propos de moi</h2>

        <label htmlFor="photo">Photo de Profil :</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/jpeg"
          onChange={handlePhotoChange}
        />
        <br />

        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name2}
          onChange={(e) => setPerson({ ...person, name2: e.target.value })}
          maxLength="50"
          placeholder="Entrez votre nom" // Placeholder em francês
        />
        <br />

        <label htmlFor="adress">Adresse :</label>
        <input
          type="text"
          id="adress"
          name="adress"
          value={person.adress2}
          onChange={(e) => setPerson({ ...person, adress2: e.target.value })}
          maxLength="100"
          placeholder="Entrez votre adresse" // Placeholder em francês
        />
        <br />

        <label htmlFor="phone">Téléphone :</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={person.phone2}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,10}$/.test(value)) { // Permite apenas até 10 dígitos
              setPerson({ ...person, phone2: value });
            }
          }}
          placeholder="Téléphone avec jusqu'à 10 chiffres" // Placeholder em francês
        />
        <br />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={person.email2}
          onChange={(e) => setPerson({ ...person, email2: e.target.value })}
          required
          placeholder="Entrez votre email" // Placeholder em francês
        />
        <br />

        <label htmlFor="position">Poste :</label>
        <input
          type="text"
          id="position"
          name="position"
          value={person.position2}
          onChange={(e) => setPerson({ ...person, position2: e.target.value })}
          maxLength="100"
          placeholder="Entrez le poste souhaité" // Placeholder em francês
        />
        <br />

        <label htmlFor="description">Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          value={person.description2}
          onChange={(e) => setPerson({ ...person, description2: e.target.value })}
          maxLength="250"
          placeholder="Entrez une brève description" // Placeholder em francês
        />
        <br />

        {/**---------------------------------- EXPERIENCE ----------------------------------*/}
        <h2>Expériences</h2>

        <label htmlFor="positionExp">Poste :</label>
        <input
          type="text"
          id="positionExp"
          name="positionExp"
          value={person.positionExp2}
          onChange={(e) => setPerson({ ...person, positionExp2: e.target.value })}
          maxLength="100"
          placeholder="Entrez le poste" // Placeholder em francês
        />
        <br />

        <label htmlFor="experience">Entreprise :</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.experience2}
          onChange={(e) => setPerson({ ...person, experience2: e.target.value })}
          maxLength="100"
          placeholder="Entrez le nom de l'entreprise" // Placeholder em francês
        />
        <br />

        <label htmlFor="adressEntreprise">Adresse de l'entreprise :</label>
        <input
          type="text"
          id="adressEntreprise"
          name="adressEntreprise"
          value={person.adressEntreprise2}
          onChange={(e) => setPerson({ ...person, adressEntreprise2: e.target.value })}
          maxLength="150"
          placeholder="Entrez l'adresse de l'entreprise" // Placeholder em francês
        />
        <br />

        <label htmlFor="dateDebut">Date de début :</label>
        <input
          type="date"
          id="dateDebut"
          name="dateDebut"
          value={person.dateDebut2}
          onChange={(e) => setPerson({ ...person, dateDebut2: e.target.value })}
          max={today} // Limita a data para não ser futura
        />
        <br />

        <label htmlFor="dateFin">Date de fin :</label>
        <input
          type="date"
          id="dateFin"
          name="dateFin"
          value={person.dateFin2}
          onChange={(e) => {
            const endDate = e.target.value;
            if (endDate >= person.dateDebut2) { // Garante que a data de fim não seja anterior à data de início
              setPerson({ ...person, dateFin2: endDate });
            }
          }}
          min={person.dateDebut2} // Data mínima baseada na data de início
        />
        <br />

        <label htmlFor="descriptionExp">Description du poste :</label>
        <input
          type="text"
          id="descriptionExp"
          name="descriptionExp"
          value={person.descriptionExp2}
          onChange={(e) => setPerson({ ...person, descriptionExp2: e.target.value })}
          maxLength="250"
          placeholder="Entrez une description du poste" // Placeholder em francês
        />
        <br />

        <button onClick={ajoutExp2}>Ajouter plus d'expériences</button>
        <br />

        {/**----------------------------- EDUCATION ----------------------------- */}

        <h2>Éducation</h2>

        <label htmlFor="institutionFormation">Institution :</label>
        <input
          type="text"
          id="institutionFormation"
          name="institutionFormation"
          value={person.institutionFormation2}
          onChange={(e) => setPerson({ ...person, institutionFormation2: e.target.value })}
          maxLength="100"
          placeholder="Entrez l'institution" // Placeholder em francês
        />
        <br />

        <label htmlFor="adressFormation">Adresse :</label>
        <input
          type="text"
          id="adressFormation"
          name="adressFormation"
          value={person.adressFormation2}
          onChange={(e) => setPerson({ ...person, adressFormation2: e.target.value })}
          maxLength="150"
          placeholder="Entrez l'adresse" // Placeholder em francês
        />
        <br />

        <label htmlFor="graduationDate">Date de diplomation :</label>
        <input
          type="date"
          id="graduationDate"
          name="graduationDate"
          value={person.graduationDateFormation2}
          onChange={(e) => setPerson({ ...person, graduationDateFormation2: e.target.value })}
          max={today} // Limita a data para não ser futura
        />
        <br />

        <label htmlFor="diplomeFormation">Diplôme :</label>
        <input
          type="text"
          id="diplomeFormation"
          name="diplomeFormation"
          value={person.diplomeFormation2}
          onChange={(e) => setPerson({ ...person, diplomeFormation2: e.target.value })}
          maxLength="100"
          placeholder="Entrez le diplôme" // Placeholder em francês
        />
        <br />

        <button onClick={ajoutForm2}>Ajouter plus de formations</button>
        <br />

        {/**----------------------------- END EDUCATION ----------------------------- */}

        <h2>Compétences</h2>

        <label htmlFor="technicalSkills">Compétences techniques :</label>
        <textarea
          id="technicalSkills"
          name="technicalSkills"
          value={person.technicalSkills2}
          onChange={(e) => setPerson({ ...person, technicalSkills2: e.target.value })}
          maxLength="500"
          placeholder="Décrivez vos compétences techniques" // Placeholder em francês
        />
        <br />

        <label htmlFor="languageSkills">Compétences linguistiques :</label>
        <textarea
          id="languageSkills"
          name="languageSkills"
          value={person.languageSkills2}
          onChange={(e) => setPerson({ ...person, languageSkills2: e.target.value })}
          maxLength="500"
          placeholder="Décrivez vos compétences linguistiques" // Placeholder em francês
        />
        <br />

      </form>
    </div>
  );
}

export default FormTemplate2;
