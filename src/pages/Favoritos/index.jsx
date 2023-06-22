import styled from 'styled-components';
import { Pesquisa } from '../../componentes/Pesquisa';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #002f52 5%,
    #326589 100%
  );
`;

export function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}