import styled from "styled-components";
import { Link } from "react-router-dom";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  color: #ffffff;
  box-shadow: 26px 30px 19px 2px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: 26px 30px 19px 2px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 26px 30px 19px 2px rgba(0, 0, 0, 0.78);
  padding: 40px;
  text-align: center;
  border: 20px solid #ff6550;
  border-radius: 5px;
  width: 200px;
  height: 300px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function Card({ character, onClose }) {
  return (
    <CardDiv>
      <CloseButton onClick={() => onClose(character)}>X</CloseButton>
      <Link to={`/detail/${character.id}`}>
        
        <h2>{character.name}</h2>
      </Link>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <img src={character.image} style={{width: "100%"}} alt={"Name"} />
    </CardDiv>
  );
}
