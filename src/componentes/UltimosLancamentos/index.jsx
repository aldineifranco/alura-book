import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo/index";
import { CardRecomenda } from "../CardRecomenda";
import livroRecomenda from "../../assets/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  gap: 16px;
  flex-wrap: wrap;
`;

export function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo>Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {" "}
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <Titulo>Talvez você se interesse</Titulo>
      <NovosLivrosContainer>
        <CardRecomenda
          titulo="Angular"
          descricao=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in"
          imagem={livroRecomenda}
        />
        <CardRecomenda
          titulo="Vue"
          descricao=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in"
          imagem={livroRecomenda}
        />
        <CardRecomenda
          titulo="React"
          descricao=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in"
          imagem={livroRecomenda}
        />
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}
