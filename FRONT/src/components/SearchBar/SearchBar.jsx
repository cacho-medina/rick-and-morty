import "./SearchBar.modules.css";
import { useState } from "react";

export default function SearchBar(props) {
    const [character, setCharacter] = useState("");
    const handleChange = (e) => {
        const personaje = e.target;
        setCharacter(personaje.value);
    };
    return (
        <div className="searchBar">
            <input
                className="searchInput"
                type="search"
                onChange={handleChange}
                value={character}
            />
            <button
                className="searchBtn"
                onClick={() => props.onSearch(character)}
            >
                Agregar
            </button>
        </div>
    );
}
