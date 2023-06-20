import { Logo } from '../logo';
import { OpcoesHeader } from "../OpcoesHeader";
import { OpcoesIcones } from "../OpcoesIcones";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 32px 0 32px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <OpcoesIcones />
    </HeaderContainer>
  );
}
