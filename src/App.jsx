import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Template1 from "./components/template1";
import Template2 from "./components/template2";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormTemplate1 from "./components/formTemplate1";
import FormTemplate2 from "./components/formTemplate2";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
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
  });

  const [template, setTemplate] = useState({
    // define the structure of the template state here
    templateName: "",
  });

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

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sélectionner le modèle
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <Row>
          <Col>
            <FormTemplate1 person={person} setPerson={setPerson} />
          </Col>
          <Col>
            <Template1 person={person} />
            <Template2 /> {/*     aparecer somente quando selecionado      */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
