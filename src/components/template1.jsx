import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import jsPDF from 'jspdf';


function template1({ person }) {
  const contentRef = useRef();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'p', // 'p' para retrato, 'l' para paisagem
      unit: 'pt', // unidade de medida (pt, mm, cm, in)
      format: 'a4' // tamanho do papel (a3, a4, a5, letter, legal)
    });
  
    // Ajuste as margens para centralizar o conteúdo
    const margins = {
      bottom: 20,
      left: 20,
      right: 20
    };
  
    // Obtenha o tamanho do conteúdo
    const contentWidth = contentRef.current.scrollWidth;
    const contentHeight = contentRef.current.scrollHeight;
  
    // Calcule a posição centralizada do conteúdo
    const x = (doc.internal.pageSize.width - contentWidth) / 2 + margins.left;
    const y = 0;
  
    // Gere o PDF com o conteúdo centralizado
    doc.html(contentRef.current, {
      callback: (doc) => {
        doc.save('document.pdf');
      },
      x: x,
      y: y,
      // Ajuste a largura da janela para redimensionar o conteúdo
      width: contentWidth,
    });
  };
  return (
    <div>
      <div ref={contentRef} className="container-template section page-break">
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
            {person.listExp?.map(
              (
                exp,
                index // Mapeia a lista de experiências e as exibe
              ) => (
                <div key={index} className="section__list">
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">{exp.experience}</div>
                      <div className="addr">{exp.adressEntreprise}</div>
                      <div className="duration">
                        {exp.dateDebut}-{exp.dateFin}
                      </div>
                    </div>
                    <div className="right">
                      <div className="name">{exp.position}</div>
                      <div className="desc">{exp.description}</div>
                      <br />
                    </div>
                    <br />
                  </div>
                  <br />
                </div>
              )
            )}
            <br />
          </div>
          {/*----------------------- fim da exp -----------------*/}
          {/*-----------------------------EDUCATION-------------------------- */}

          <div className="section">
            <div className="section__title">Education</div>
            {person.listEdu?.map((edu, index) => (
              <div key={index} className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">{edu.institutionFormation}</div>
                    <div className="addr">{edu.adressFormation}</div>
                    <div className="duration">
                      {edu.graduationDateFormation}
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">{edu.diplomeFormation}</div>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
          <br />
          {/*-----------------------------FIM EDUCATION-------------------------- */}
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
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? generatePDF : null}
        style={{ marginTop: "20px", marginRight: "20px", }}
      >
        {isLoading ? "Loading…" : "Download PDF"}
      </Button>
      
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? generatePDF : null}
        style={{ marginTop: "20px", marginLeft: "20px", }}
      >
        {isLoading ? "Loading…" : "Download Word"}
      </Button>
    </div>
  );
}

export default template1;
