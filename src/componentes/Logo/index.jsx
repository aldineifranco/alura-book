import logotipo from "../../assets/logo.svg";
import styled from "styled-components";

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    gap: 10px;

  & p strong {
    color: #505050;
  }
`;


export function Logo() {
  return (
    <ContainerLogo>
      <img src={logotipo} alt="logo" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </ContainerLogo>
  );
}
