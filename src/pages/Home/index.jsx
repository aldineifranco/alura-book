import { Pesquisa } from "../../componentes/Pesquisa";
import { UltimosLancamentos } from "../../componentes/UltimosLancamentos";
import styled from "styled-components";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #002f52 5%,
    #326589 100%
  );
`;

export function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}



