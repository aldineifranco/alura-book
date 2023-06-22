import { Logo } from "../Logo";
import { OpcoesHeader } from "../OpcoesHeader";
import { OpcoesIcones } from "../OpcoesIcones";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 32px 0 32px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Header() {
  return (
    <HeaderContainer>
      <StyledLink to={'/'}>
        <Logo />
      </StyledLink>
      <OpcoesHeader />
      <OpcoesIcones />
    </HeaderContainer>
  );
}
