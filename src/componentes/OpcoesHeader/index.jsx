import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  gap: 16px;

  & li {
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
  }

  & li:hover {
    background-color: #e4e4e4;
  }
`;

const textoOpcoes = [
  "CATEGORIAS",
  "FAVORITOS",
  "MINHA ESTANTE",
];

export function OpcoesHeader() {
  return (
    <Container>
      {textoOpcoes.map((item) => (
        <li>{item}</li>
      ))}
    </Container>
  );
}