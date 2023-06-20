import { Header } from "./componentes/Header";
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      90deg,
      #002f52 5%,
      #326589 100%
    );
`;

function App() {
  return (
    <AppContainer className="App">
      <Header />
    </AppContainer>
  );
}

export default App;
