import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.modules.css";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);
    return (
        <>
            <div className="details">
                <img src={character.image} alt={character.name} />
                <div className="description">
                    <h1>{character.name}</h1>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.gender}</h3>
                    <h3>{character?.origin?.name}</h3>
                    <button className="homeBtn">
                        <Link to="/home" className="homeLink">
                            Home
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Detail;
