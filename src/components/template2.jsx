import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { saveAs } from "file-saver";
import { format } from 'date-fns';

// Função para formatar datas
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy'); // ou qualquer outro formato que desejar
};

function Template2({ person }) {
  const contentRef2 = useRef();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000)); // Button Loading Download
    }
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const generatePDF2 = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });

    const margins = {
      bottom: 20,
      left: 20,
      right: 20,
    };

    const contentWidth = contentRef2.current.scrollWidth;
    const contentHeight = contentRef2.current.scrollHeight;

    const x = (doc.internal.pageSize.width - contentWidth) / 2 + margins.left;
    const y = 0;

    doc.html(contentRef2.current, {
      callback: (doc) => {
        doc.save("document.pdf");
      },
      x: x,
      y: y,
      width: contentWidth,
    });
  };

  const generateWord2 = async () => {
    setLoading(true);
    console.log(person.profilePhoto);
    console.log(URL.createObjectURL(person.profilePhoto));
    const response = await fetch(URL.createObjectURL(person.profilePhoto));
    const buffer = await response.arrayBuffer();
    console.log(buffer);

    const documentContent = [
      new Paragraph({
        children: [
          new TextRun({
            text: person.name2,
            bold: true,
            size: 32,
          }),
          new TextRun({
            text: `\nEmail: ${person.email2}`,
            size: 24,
          }),
          new TextRun({
            text: `\nPhone: ${person.phone2}`,
            size: 24,
          }),
          new TextRun({
            text: `\nPosition: ${person.position2}`,
            size: 24,
          }),
          new TextRun({
            text: `\nDescription: ${person.description2}`,
            size: 24,
          }),
        ],
      }),
    ];

    // let imageBuffer = null;
    // // if (profilePhoto) {
      documentContent.unshift(
        new Paragraph({
          children: [
            new ImageRun({
            data: buffer,
              transformation: {
                width: 100,
                height: 100,
              },
            }),
          ],
        })
      );
    // }
    // if (imageBuffer) {
    // }

    documentContent.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "\nExperience",
            bold: true,
            size: 28,
          }),
          ...person.listExp2.map(
            (exp) =>
              new TextRun({
                text: `\n\n${exp.positionExp2} at ${exp.experience2}, ${exp.adressEntreprise2} (${formatDate(exp.dateDebut2)} - ${formatDate(exp.dateFin2)})\n${exp.descriptionExp2}`,
                size: 24,
              })
          ),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "\nEducation",
            bold: true,
            size: 28,
          }),
          ...person.listEdu2.map(
            (edu) =>
              new TextRun({
                text: `\n\n${edu.diplomeFormation2} at ${edu.institutionFormation2}, ${edu.adressFormation2} (${formatDate(edu.graduationDateFormation2)})`,
                size: 24,
              })
          ),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "\nSkills",
            bold: true,
            size: 28,
          }),
          new TextRun({
            text: `\n${person.technicalSkills2}`,
            size: 24,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "\nLanguage Skills",
            bold: true,
            size: 28,
          }),
          new TextRun({
            text: `\n${person.languageSkills2}`,
            size: 24,
          }),
        ],
      })
    );

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: documentContent,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "document.docx");
    setLoading(false);
  };

  return (
    <div>
      <div ref={contentRef2} className="template2-container">
        <header className="template2-header">
          <div className="template2-photo">
            <img
              src={
                person.profilePhoto
                  ? URL.createObjectURL(person.profilePhoto)
                  : ""
              }
              alt="Photo de Perfil"
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
                {exp.experience2}, {exp.adressEntreprise2}, {formatDate(exp.dateDebut2)} - {formatDate(exp.dateFin2)}
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
                {formatDate(edu.graduationDateFormation2)}
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
          </div>
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
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? generatePDF2 : null}
        style={{ marginTop: "20px", marginRight: "20px" }}
      >
        {isLoading ? "Loading…" : "Download PDF"}
      </Button>

      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? generateWord2 : null}
        style={{ marginTop: "20px", marginLeft: "20px" }}
      >
        {isLoading ? "Loading…" : "Download Word"}
      </Button>
    </div>
  );
}

export default Template2;
