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

const Header = () => {
  return (
    <HeaderContainer className="container">
      <NavContainer>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-ukraine`}></use>
        </svg>
        <LogoLink href="/">LearnLingo</LogoLink>
        <NavList>
          <NavItem>
            <NavItemLink href="">Home</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="">Teachers</NavItemLink>
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
        <RegistrationButton>Registration</RegistrationButton>
      </BtnContainer>
    </HeaderContainer>
  );
};

export default Header;
