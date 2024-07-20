import "../App.css";
import "./style.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Template1 from "../components/template1";
import Template2 from "../components/template2";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormTemplate1 from "../components/formTemplate1";
import FormTemplate2 from "../components/formTemplate2";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Curriculum() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    about: "",
    experience: "",
    dateDebut: "",
    adressEntreprise: "",
    dateFin: "",
    positionExp: "",
    descriptionExp: "",
    experience2: "",
    dateDebut2: "",
    adressEntreprise2: "",
    dateFin2: "",
    positionExp2: "",
    descriptionExp2: "",
    institutionFormation: "",
    adressFormation: "",
    graduationDateFormation: "",
    diplomeFormation: "",
    technicalSkills: "",
    languageSkills: "",
    listExp:[],
    listEdu:[],
  });

  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelect(e) {
    setSelectedItem(e);
  }

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">cvGenerator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Lettre de Motivation</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem === null ? "Sélectionner le modèle" : selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Template 1">Template 1</Dropdown.Item>
          <Dropdown.Item eventKey="Template 2">Template 2</Dropdown.Item>
          <Dropdown.Item eventKey="Template 3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <Row>
          <Col>
            {selectedItem === "Template 2" ? (
              <FormTemplate2 person={person} setPerson={setPerson} />
            ) : (
              <FormTemplate1 person={person} setPerson={setPerson} />
            )}
          </Col>
          <Col>
            {selectedItem === "Template 2" ? (
              <Template2 person={person} />
            ) : (
              <Template1 person={person} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Curriculum;
