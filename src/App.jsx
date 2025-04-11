import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/login";
import UploadPhoto from "./pages/UploadPhoto";  // Importar UploadPhoto desde pages

import RegisterUser from "./pages/RegisterUser/RegisterUser";
import viteLogo from "/vite.svg";
import Autenticacion from "./pages/Autenticacionloginsegura/Autenticacion";
import EditProfile from "./pages/EdicionPerfil/EdicionPerfil";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/login">Login</Link>
        <Link to="/uploadphoto">Álbum</Link> {/* Enlace a la página de carga de fotos */}
        <Link to="/RegisterUser">Registro de usuario</Link>
        
        <Link to="/Autenticacion">Autenticación Segura</Link>
        <Link to="/EditProfile">Editar Perfil</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="/uploadphoto" element={<UploadPhoto />} /> {/* Ruta correcta para UploadPhoto */}
        <Route path="/RegisterUser" element= {<RegisterUser/>}/>
        <Route path="/Autenticacion" element={<Autenticacion />} />
        <Route path="/EdicionPerfil" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
