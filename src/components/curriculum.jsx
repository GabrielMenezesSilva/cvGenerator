import "../App.css";
import "./style.css";
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
import { useNavigate } from "react-router-dom";

function Curriculum() {
  // Define o estado 'person' com várias propriedades para armazenar informações do currículo
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
    institutionFormation: "",
    adressFormation: "",
    graduationDateFormation: "",
    diplomeFormation: "",
    technicalSkills: "",
    languageSkills: "",
    listExp: [],
    listEdu: [],
    photo2: "",
    name2: "",
    adress2: "",
    phone2: "",
    email2: "",
    position2: "",
    description2: "",
    positionExp2: "",
    experience2: "",
    adressEntreprise2: "",
    dateDebut2: "",
    dateFin2: "",
    descriptionExp2: "",
    diplomeFormation2: "",
    institutionFormation2: "",
    adressFormation2: "",
    graduationDateFormation2: "",
    listExp2: [],
    listEdu2: [],
    technicalSkills2: "",
    languageSkills2: "",
  });

  const [selectedItem, setSelectedItem] = useState(null); // Define o estado 'selectedItem' para armazenar o item selecionado no dropdown

  function handleSelect(e) {
    // Função para lidar com a seleção de um item no dropdown
    setSelectedItem(e);
  }
  const navigate = useNavigate(); // realizar logout removendo o token do usuário do localStorage e navegando para a página de login
  function logOut() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">cvGenerator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Lettre de Motivation</Nav.Link>
            <Nav.Link onClick={logOut}>LogOut</Nav.Link>
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
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <Row>
          <Col>
            {/* Renderiza o formulário de acordo com o template selecionado */}
            {selectedItem === "Template 2" ? (
              <FormTemplate2 person={person} setPerson={setPerson} />
            ) : (
              <FormTemplate1 person={person} setPerson={setPerson} />
            )}
          </Col>
          <Col>
            {/* renderiza o template*/}
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
