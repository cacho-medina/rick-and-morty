import Card from "../Card/Card";
import style from "styled-components";

const Personajes = style.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`;

export default function Cards(props) {
    const { characters } = props;
    return (
        <Personajes>
            {characters.map(({ id, name, species, gender, image }, index) => {
                return (
                    <Card
                        key={index}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        id={id}
                        onClose={() => props.onClose(id)}
                    />
                );
            })}
        </Personajes>
    );
}
