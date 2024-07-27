import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

function template1({ person }) {
  const refPdf = useRef();

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
  const dpi = 72;
  const pageWidthMM = 210;
  const pageHeightMM = 297;

  const pageWidthPx = (pageWidthMM * dpi) / 25.4;
  const pageHeightPx = (pageHeightMM * dpi) / 25.4;

  function newPdf() {
    setLoading(true);
    const options = {
      // default is `save`
      filename: "teste.pdf",
      method: "open",
      pageBreak: "always",
      // default is Resolution.MEDIUM = 3, which should be enough, higher values
      // increases the image quality but also the size of the PDF, so be careful
      // using values higher than 10 when having multiple pages generated, it
      // might cause the page to crash or hang.
      resolution: Resolution.HIGH,
      page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: Margin.SMALL,
        // default is 'A4'
        format: "letter",
        // default is 'portrait'
        orientation: "portrait",
        page: {
          x: pageWidthPx / 2,
          y: pageHeightPx / 2,
        },
      },
      canvas: {
        // default is 'image/jpeg' for better size performance
        mimeType: "image/png",
        qualityRatio: 10,
      },
      // Customize any value passed to the jsPDF instance and html2canvas
      // function. You probably will not need this and things can break,
      // so use with caution.
      overrides: {
        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
        pdf: {
          compress: true,
        },
        // see https://html2canvas.hertzen.com/configuration for more options
        canvas: {
          useCORS: true,
        },
      },
    };
    generatePDF(refPdf, options);
    setLoading(false);
  }

  return (
    <div>
      <div ref={refPdf} className="container-template section page-break">
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
        onClick={!isLoading ? newPdf : null}
        style={{ marginTop: "20px", marginRight: "20px", }}
      >
        {isLoading ? "Loading…" : "Download PDF"}
      </Button>
      
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? newPdf : null}
        style={{ marginTop: "20px", marginLeft: "20px", }}
      >
        {isLoading ? "Loading…" : "Download Word"}
      </Button>
    </div>
  );
}

export default template1;
