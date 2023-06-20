import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  & li {
    background-color: #fff;
    border: 1px solid #dbdddf;
    border-radius: 4px;
    padding: 12px;
    cursor: pointer;
    transition: ease 0.8s;
  }

  & li:hover {
    background-color: #e4e4e4;
  }

  & li img {
    height: 16px;
    color: #326589;
  }
`;

const icones = [perfil, sacola];

export function OpcoesIcones() {
  return (
    <Container>
      {icones.map((icone) => (
        <li>
          <img src={icone}></img>
        </li>
      ))}
    </Container>
  );
}