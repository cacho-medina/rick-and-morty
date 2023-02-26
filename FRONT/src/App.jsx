import React from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import style from "styled-components";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

const AppRM = style.div`
    font-family: 'Prompt', sans-serif;
    color: #ffffff;
    height: 100vh;
`;

function App() {
    let username = "zanlorenzocacho10@gmail.com";
    let password = "cacho123";
    const [access, setAccess] = useState(false);
    const navigate = useNavigate();
    function login(userData) {
        if (userData.password === password && userData.username === username) {
            setAccess(true);
            navigate("/home");
        }
    }
    useEffect(() => {
        !access && navigate("/");
    }, [access]);
    const [characters, setCharacters] = useState([]);
    function onSearch(character) {
        fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    }
    const onClose = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    };
    const location = useLocation().pathname;
    return (
        <AppRM>
            {location !== "/" && <Nav onSearch={onSearch} />}
            <Routes>
                <Route path="/" element={<Form login={login} />} />
                <Route
                    path="/home"
                    element={
                        <Cards characters={characters} onClose={onClose} />
                    }
                />
                <Route path="about" element={<About />} />
                <Route path="detail/:detailId" element={<Detail />} />
            </Routes>
        </AppRM>
    );
}

export default App;
