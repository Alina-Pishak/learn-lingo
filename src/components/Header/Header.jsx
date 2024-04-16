import {
  BtnContainer,
  HeaderContainer,
  LoginBtnWrapper,
  LoginButton,
  LogoLink,
  NavContainer,
  NavItem,
  NavItemLink,
  NavList,
  RegistrationButton,
} from "./Header.styled";

import sprite from "../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer className="hero-container">
      <NavContainer>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-ukraine`}></use>
        </svg>
        <LogoLink to="/">LearnLingo</LogoLink>
        <NavList>
          <NavItem>
            <NavItemLink href="/">Home</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/teachers">Teachers</NavItemLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <BtnContainer>
        <LoginBtnWrapper>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-login`}></use>
          </svg>
          <LoginButton>Log in</LoginButton>
        </LoginBtnWrapper>
        <RegistrationButton onClick={() => navigate("/teachers")}>
          Registration
        </RegistrationButton>
      </BtnContainer>
    </HeaderContainer>
  );
};

export default Header;
