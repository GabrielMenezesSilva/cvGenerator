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
import { toast } from "react-toastify";


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
    toast.success("Utilisateur desconnecté avec succès");

  }

  return (
    <>


<Navbar style={{ backgroundColor: '#85937a', color: '#202e32', textDecoration: 'none',padding:'5px', borderRadius:"13px" , width: '100%' }} expand="lg" className="navbar-dark w-100 fluid">
  <Navbar.Brand style={{padding:"8px"}}>cvGenerator</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Lettre de Motivation</Nav.Link> */}
      <span id="span-navBar">Ceci est juste un exemple, n'hésitez pas à apporter des modifications lorsque nécessaire !</span>
    </Nav>
    <Nav className="ms-auto">
      <Dropdown onSelect={handleSelect} style={{marginBottom:"10px", display:"flex",
        justifyContent:"center", alignItems:"center", width:"100%", marginTop:"20px"}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{textAlign:"center", backgroundColor:"#586c5c", marginBottom:"15px", alignItems:"center"}}>
          {selectedItem === null ? "Sélectionner le modèle" : selectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{textAlign:"center", backgroundColor:"#a9af90", display:"row", alignItems:"center",}}>
          <Dropdown.Item eventKey="Template 1">Template 1</Dropdown.Item>
          <Dropdown.Item eventKey="Template 2">Template 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Link onClick={logOut} style={{color:"white", textTransform:"uppercase",
        fontSize:"12px", fontWeight:"bold", backgroundColor:"#85937a", borderRadius:"13px"
        }}>Déconnexion</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
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
