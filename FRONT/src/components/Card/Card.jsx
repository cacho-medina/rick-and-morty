import { Link } from "react-router-dom";
import "./Card.modules.css";

export default function Card(props) {
    return (
        <div className="card">
            <button className="closeBtn" onClick={props.onClose}>
                X
            </button>
            <img src={props.image} alt={props.name} className="cardImg" />
            <Link style={{ color: "black" }} to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <h2 className="subtext">{props.species}</h2>
            <h2 className="subtext">{props.gender}</h2>
        </div>
    );
}
