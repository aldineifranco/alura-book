import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.ul`
  display: flex;
  gap: 16px;

  & p {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    list-style: none;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    transition: ease 0.8s;
    border-style: none;
    text-transform: uppercase;
  }

  & p:hover {
    background-color: #e4e4e4;
  }
`;

const textoOpcoes = [
  "categorias",
  "favoritos",
  "estante",
];

export function OpcoesHeader() {
  return (
    <Container>
      {textoOpcoes.map((item) => (
        <Link to={`/${item}`}>
          <p>{item}</p>
        // </Link>
      ))}
    </Container>
  );
}