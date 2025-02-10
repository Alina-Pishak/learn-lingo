import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 12px;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: #121417;
  background: var(--bg-btn);
  margin-top: 22px;
  display: block;
  margin: ${({ $variant }) => $variant === "teachers" && "0 auto"};
  width: ${({ $variant }) =>
    ($variant === "primary" && "100%") ||
    ($variant === "hero" && "267px") ||
    ($variant === "teachers" && "183px") ||
    ($variant === "filters" && "183px")};
  height: ${({ $variant }) => ($variant === "filters" && "50px") || "60px"};
`;
