import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
// const EMAIL = "jorselmaurera@gmail.com";
// const PASSWORD = "jjmb079";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function Login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {}

    useEffect(() => {
      !access && navigate("/");
    }, [access]);

    async function onSearch(id) {
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
        if (!id?.length) {
          return alert("Ingrese un id valido ");
        }

        const existeElPersonaje = characters.some(
          (character) => character.id === Number(id)
        );
        if (existeElPersonaje) {
          return window.alert("Ya agregaste este personaje jejeje");
        }
      } catch (error) {
        alert("¡No hay personajes con este ID!");
      }
    }

    const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id);
        })
      );
    };

    return (
      <div className="App">
        {pathname !== "/" && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/" element={<Form login={Login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    );
  }
};
export default App;
