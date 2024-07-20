import React, { useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2Canvas from "html2canvas";

function template1({ person }) {
  const refPdf = useRef();

  function exportPdf() {
    if (!refPdf.current) return;
    const pdf = new jsPDF("p", "pt", "a4");

    const pageHeight = pdf.internal.pageSize.getHeight(); // Altura da página PDF em mm
    const pageWidth = pdf.internal.pageSize.getWidth(); // Largura da página PDF em mm
    const inputHeight = refPdf.current.scrollHeight; // Altura da div
    const inputWidth = refPdf.current.scrollWidth; // Largura da div

    // Número total de páginas necessárias
    const totalPages = Math.ceil(inputHeight / pageHeight);

    html2Canvas(refPdf.current, { scrollY: -window.scrollY }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        let heightLeft = inputHeight;
        let position = 0;

        for (let i = 0; i < totalPages; i++) {
            pdf.addImage(imgData, 'PNG', 0, position, pageWidth, inputHeight * (pageWidth / inputWidth));
            heightLeft -= pageHeight;
            position -= pageHeight;
            if (heightLeft > 0) {
                pdf.addPage();
            }
        }

        pdf.save('download.pdf');
    });
  }

  return (
    <div>
      <div ref={refPdf} className="container-template">
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
            {person.listExp?.map((exp, index) => (
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
            ))}
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
      <input
        id="DowPDF"
        type="button"
        value="Download PDF"
        onClick={exportPdf}
      />
    </div>
  );
}

export default template1;
