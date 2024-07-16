import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Template1 from "./components/template1";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "./components/formComponent";
import { useState } from "react";

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

      <Container>
        <Row>
          <Col>
            <Form person={person} setPerson={setPerson} />
          </Col>
          <Col>
            <Template1 person={person} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
