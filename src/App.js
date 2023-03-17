import "./App.css";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (character) => {
    setCharacters(characters.filter((people) => people.id !== character.id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>        
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
