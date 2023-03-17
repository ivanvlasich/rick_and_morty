import Card from "./Card";
import styled from 'styled-components';


const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

function Cards({ characters, onClose }) {
  return (
    <Contenedor>
      {characters.map((character) => {
        return (
          <Card
            character = {character}
            onClose={onClose}
          />
        );
      })}
    </Contenedor>
  );
}

export default Cards;


