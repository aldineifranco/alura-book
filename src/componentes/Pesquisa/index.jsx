import { styled } from "styled-components";
import { livros } from "./dadosPesquisa";
import { useState } from "react";

import Input from "../Input";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(
    90deg,
    #002f52 35%,
    #326589 165%
  );
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ContainerLivro = styled.div`
  display: flex;

`;

const Livro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export function Pesquisa() {
  const [
    livrosPesquisados,
    setLivrosPesquisados,
  ] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>
        Encontre seu livro em nossa estante.
      </Subtitulo>
      <Input
        type="text"
        placeholder="Escreva sua própria leitura"
        onBlur={(evento) => {
          const textoDigitado =
            evento.target.value;
          const filtroLivros = livros.filter(
            (livro) =>
              livro.nome.includes(
                textoDigitado
              ) ||
              livro.autor.includes(textoDigitado)
          );
          setLivrosPesquisados(filtroLivros);
        }}
      />

      <ContainerLivro>
        {livrosPesquisados.map((livro) => (
          <Livro>
            <p>{livro.nome}</p>
            <img src={livro.src} />
          </Livro>
        ))}
      </ContainerLivro>
    </PesquisaContainer>
  );
}
