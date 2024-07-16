import React from "react";
import jsPDF from 'jspdf';

const generatePdf = () => {
  const doc = new jsPDF();
  const person = { /* dados do componente */ };

  // Adicione conteúdo ao PDF
  doc.text(10, 10, `Name: ${person.name}`);
  doc.text(10, 20, `Email: ${person.email}`);
  doc.text(10, 30, `Phone: ${person.phone}`);
  // ...

  // Salve o PDF como um blob
  const pdfBlob = doc.output('blob');

  // Crie um link para download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(pdfBlob);
  link.download = 'resume.pdf';
  link.click();
};

function template1({ person }) {
  return (
    <div>
      <div className="container-template">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{person.name}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val"> {person.email} </span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val"> {person.phone} </span>
          </div>

          <div className="about">
            <span className="position"> {person.position} </span>
            <br />
            <span className="desc">{person.description}</span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">{person.experience}</div>
                  <div className="addr">{person.adressEntreprise}</div>
                  <div className="duration">
                    {person.dateDebut}-{person.dateFin}
                  </div>
                </div>
                <div className="right">
                  <div className="name">{person.positionExp}</div>
                  <div className="desc">{person.descriptionExp}</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">{person.experience2}</div>
                  <div className="addr">{person.adressEntreprise2}</div>
                  <div className="duration">
                    {person.dateDebut2}-{person.dateFin2}
                  </div>
                </div>
                <div className="right">
                  <div className="name">{person.positionExp2}</div>
                  <div className="desc">{person.descriptionExp2}</div>
                </div>
              </div>
            </div>
          </div>
          {/*-----------------------------EDUCATION-------------------------- */}

          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">{person.institutionFormation}</div>
                  <div className="addr">{person.adressFormation}</div>
                  <div className="duration">
                    {person.graduationDateFormation}
                  </div>
                </div>
                <div className="right">
                  <div className="name">{person.diplomeFormation}</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
          </div>
          {/*-----------------------------FIM EDUCATION-------------------------- */}
          {/* <div className="section">
          <div className="section__title">Projects</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="name">DSP</div>
              <div className="text">
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow.
              </div>
            </div>

            <div className="section__list-item">
              <div className="name">DSP</div>
              <div className="text">
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow. <a href="/login">link</a>
              </div>
            </div>
          </div>
        </div> */}
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              <div className="skills__item">
                <div className="left">
                  <div className="name">{person.technicalSkills}</div>
                </div>
                <div className="right"></div>
              </div>
            </div>
            <div className="section">
              <div className="section__title">Language Skills</div>
              <div className="section__list">
                <div className="section__list-item">
                  {person.languageSkills}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input id="DowPDF" type="button" value="Download PDF" onClick={generatePdf} />    </div>
  );
}

export default template1;
