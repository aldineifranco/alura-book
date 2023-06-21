import styled from "styled-components";

const Container = styled.section`
  display: flex;
  padding: 24px;
  border: 2px solid #fff;
  border-radius: 4px;
  gap: 16px;
  max-width: 30%;
  `;

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h4 {
    font-size: 24px;

  }

  p {
    font-size: 16px;
    text-align: justify;
  }
`;

const Imagem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    background-color: #eb9b00;
    padding: 12px;
    border-style: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: ease 0.5s;
  }

  button:hover {
    background-color: #da9203;
  }
`;

export function CardRecomenda({
  titulo,
  descricao,
  imagem,
}) {
  return (
    <Container>
      <Descricao>
        <h4>{titulo}</h4>
        <p>{descricao}</p>
      </Descricao>
      <Imagem>
        <img src={imagem} alt="" />
        <button>Saiba Mais</button>
      </Imagem>
    </Container>
  );
}