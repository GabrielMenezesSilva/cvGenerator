import React, { useEffect, useState } from "react";

function FormComponent({ person, setPerson }) {
  // Estado para armazenar as experiências e formações
  const [listExp, setListExp] = useState([]);
  const [listEdu, setListEdu] = useState([]);

  // Função para adicionar uma nova experiência à lista de experiências
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
      descriptionExp: "" 
    });
  }

  // Função para adicionar uma nova formação à lista de formações
  function ajoutForm(e) {
    e.preventDefault();
    const form = {
      institutionFormation: person.institutionFormation,
      adressFormation: person.adressFormation,
      graduationDateFormation: person.graduationDateFormation,
      diplomeFormation: person.diplomeFormation,
    };
    setListEdu((prevList) => [...prevList, form]);
    setPerson({ 
      ...person, 
      institutionFormation: "", 
      adressFormation: "", 
      graduationDateFormation: "", 
      diplomeFormation: "" 
    });
  }

  // Atualiza o estado 'person' com a lista de formações quando 'listEdu' muda
  useEffect(() => {
    setPerson({ ...person, listEdu: listEdu });
  }, [listEdu]);

  // Atualiza o estado 'person' com a lista de experiências quando 'listExp' muda
  useEffect(() => {
    setPerson({ ...person, listExp: listExp });
  }, [listExp]);

  return (
    <div>
      <form id="cv-form">
        {/* Seção About Me */}
        <h2>À propos de moi</h2>

        {/* Campo para o nome */}
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          placeholder="Votre nom"
          maxLength="50" // Limita a 50 caracteres
        />
        <br />

        {/* Campo para o e-mail */}
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          placeholder="Votre email"
          required // Campo obrigatório
        />
        <br />

        {/* Campo para o telefone */}
        <label htmlFor="phone">Téléphone :</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={person.phone}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value) && value.length <= 10) { // Limita a 10 dígitos
              setPerson({ ...person, phone: value });
            }
          }}
          placeholder="Téléphone jusqu'à 10 chiffres"
        />
        <br />

        {/* Campo para a posição */}
        <label htmlFor="position">Poste :</label>
        <input
          type="text"
          id="position"
          name="position"
          value={person.position}
          onChange={(e) => setPerson({ ...person, position: e.target.value })}
          placeholder="Votre poste"
          maxLength="100" // Limita a 100 caracteres
        />
        <br />

        {/* Campo para a descrição */}
        <label htmlFor="description">Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          value={person.description}
          onChange={(e) => setPerson({ ...person, description: e.target.value })}
          placeholder="Description de vous-même"
          maxLength="250" // Limita a 250 caracteres
        />
        <br />

        {/* Seção Experience */}
        <h2>Expérience</h2>

        {/* Campo para a experiência */}
        <label htmlFor="experience">Entreprise :</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={person.experience}
          onChange={(e) => setPerson({ ...person, experience: e.target.value })}
          placeholder="Nom de l'entreprise"
          maxLength="100" // Limita a 100 caracteres
        />
        <br />

        {/* Campo para o endereço da empresa */}
        <label htmlFor="adressEntreprise">Adresse de l'entreprise :</label>
        <input
          type="text"
          id="adressEntreprise"
          name="adressEntreprise"
          value={person.adressEntreprise}
          onChange={(e) => setPerson({ ...person, adressEntreprise: e.target.value })}
          placeholder="Adresse de l'entreprise"
          maxLength="150" // Limita a 150 caracteres
        />
        <br />

        {/* Campo para a data de início */}
        <label htmlFor="dateDebut">Date de début :</label>
        <input
          type="date"
          id="dateDebut"
          name="dateDebut"
          value={person.dateDebut}
          onChange={(e) => setPerson({ ...person, dateDebut: e.target.value })}
          max={new Date().toISOString().split('T')[0]} // Limitar até a data atual
        />
        <br />

        {/* Campo para a data de término */}
        <label htmlFor="dateFin">Date de fin :</label>
        <input
          type="date"
          id="dateFin"
          name="dateFin"
          value={person.dateFin}
          onChange={(e) => setPerson({ ...person, dateFin: e.target.value })}
        />
        <br />

        {/* Campo para o cargo ocupado */}
        <label htmlFor="positionExp">Poste occupé :</label>
        <input
          type="text"
          id="positionExp"
          name="positionExp"
          value={person.positionExp}
          onChange={(e) => setPerson({ ...person, positionExp: e.target.value })}
          placeholder="Poste occupé"
          maxLength="100" // Limita a 100 caracteres
        />
        <br />

        {/* Campo para a descrição do trabalho */}
        <label htmlFor="descriptionExp">Description du travail :</label>
        <input
          type="text"
          id="descriptionExp"
          name="descriptionExp"
          value={person.descriptionExp}
          onChange={(e) => setPerson({ ...person, descriptionExp: e.target.value })}
          placeholder="Description du travail"
          maxLength="250" // Limita a 250 caracteres
        />
        <br />

        {/* Botão para adicionar mais experiências */}
        <button onClick={ajoutExp}>Ajouter plus d'expériences</button>
        <br />

        {/* Seção Formation */}
        <h2>Formation</h2>

        {/* Campo para a instituição */}
        <label htmlFor="institutionFormation">Institution :</label>
        <input
          type="text"
          id="institutionFormation"
          name="institutionFormation"
          value={person.institutionFormation}
          onChange={(e) => setPerson({ ...person, institutionFormation: e.target.value })}
          placeholder="Nom de l'institution"
          maxLength="100" // Limita a 100 caracteres
        />
        <br />

        {/* Campo para o endereço da formação */}
        <label htmlFor="adressFormation">Adresse :</label>
        <input
          type="text"
          id="adressFormation"
          name="adressFormation"
          value={person.adressFormation}
          onChange={(e) => setPerson({ ...person, adressFormation: e.target.value })}
          placeholder="Adresse de la formation"
          maxLength="150" // Limita a 150 caracteres
        />
        <br />

        {/* Campo para a data de graduação */}
        <label htmlFor="graduationDateFormation">Date de graduation :</label>
        <input
          type="date"
          id="graduationDateFormation"
          name="graduationDateFormation"
          value={person.graduationDateFormation}
          onChange={(e) => setPerson({ ...person, graduationDateFormation: e.target.value })}
        />
        <br />

        {/* Campo para o diploma */}
        <label htmlFor="diplomeFormation">Diplôme :</label>
        <input
          type="text"
          id="diplomeFormation"
          name="diplomeFormation"
          value={person.diplomeFormation}
          onChange={(e) => setPerson({ ...person, diplomeFormation: e.target.value })}
          placeholder="Diplôme obtenu"
          maxLength="100" // Limita a 100 caracteres
        />
        <br />

        {/* Botão para adicionar mais formações */}
        <button onClick={ajoutForm}>Ajouter plus de formations</button>
        <br />

        {/* Seção Skills */}
        <h2>Compétences</h2>

        {/* Campo para habilidades técnicas */}
        <label htmlFor="technicalSkills">Compétences techniques :</label>
        <textarea
          id="technicalSkills"
          name="technicalSkills"
          value={person.technicalSkills}
          onChange={(e) => setPerson({ ...person, technicalSkills: e.target.value })}
          placeholder="Listez vos compétences techniques"
          maxLength="500" // Limita a 500 caracteres
        />
        <br />

        {/* Campo para habilidades linguísticas */}
        <label htmlFor="languageSkills">Compétences linguistiques :</label>
        <textarea
          id="languageSkills"
          name="languageSkills"
          value={person.languageSkills}
          onChange={(e) => setPerson({ ...person, languageSkills: e.target.value })}
          placeholder="Listez vos compétences linguistiques"
          maxLength="500" // Limita a 500 caracteres
        />
        <br />
      </form>
    </div>
  );
}

export default FormComponent;
