import { Route, Routes } from "react-router-dom";
import "./App.css";
import Curriculum from "./components/curriculum";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Curriculum/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
