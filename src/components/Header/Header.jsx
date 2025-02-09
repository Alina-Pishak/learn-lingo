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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutUserThunk } from "../../redux/auth/thunks";
import { createPortal } from "react-dom";
import RegistrationForm from "../RegistationForm/RegistrationForm";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  function handleLogOut() {
    dispatch(logoutUserThunk());
    if (location.pathname === "/favorites") {
      navigate("/");
    }
  }

  return (
    <header className="hero-container">
      <HeaderContainer>
        <NavContainer>
          <svg width={28} height={28}>
            <use href={`${sprite}#icon-ukraine`}></use>
          </svg>
          <LogoLink to="/">LearnLingo</LogoLink>
          <NavList>
            <NavItem>
              <NavItemLink to="/" current={`${location.pathname === "/"}`}>
                Home
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink
                to="/teachers"
                current={`${location.pathname === "/teachers"}`}
              >
                Teachers
              </NavItemLink>
            </NavItem>
            {user && (
              <NavItem>
                <NavItemLink
                  to="/favorites"
                  current={`${location.pathname === "/favorites"}`}
                >
                  Favorites
                </NavItemLink>
              </NavItem>
            )}
          </NavList>
        </NavContainer>
        <BtnContainer>
          {user ? (
            <>
              <LoginBtnWrapper onClick={handleLogOut}>
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-login`}></use>
                </svg>
                <LoginButton>Log out</LoginButton>
              </LoginBtnWrapper>
            </>
          ) : (
            <>
              <LoginBtnWrapper onClick={() => setIsLoginOpen(true)}>
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-login`}></use>
                </svg>
                <LoginButton>Log in</LoginButton>
              </LoginBtnWrapper>
              <RegistrationButton onClick={() => setIsRegistrationOpen(true)}>
                Registration
              </RegistrationButton>
            </>
          )}
        </BtnContainer>
      </HeaderContainer>
      {isRegistrationOpen &&
        createPortal(
          <RegistrationForm onClose={() => setIsRegistrationOpen(false)} />,
          document.body
        )}
      {isLoginOpen &&
        createPortal(
          <LoginForm onClose={() => setIsLoginOpen(false)} />,
          document.body
        )}
    </header>
  );
};

export default Header;
