import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1184px;
  padding-top: 20px;
  padding-right: 128px;
  padding-left: 128px;
  margin-bottom: 20px;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
  margin-right: 382px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavItem = styled.li``;

export const NavItemLink = styled(NavLink)`
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  color: #121417;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background: none;
`;

export const RegistrationButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #fff;
  padding: 14px 39px;
  background-color: #121417;
  width: 166px;
  height: 48px;
  border-radius: 12px;
`;
