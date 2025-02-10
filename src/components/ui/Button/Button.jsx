/* eslint-disable react/prop-types */

import { ButtonStyled } from "./Button.styled";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} $variant={variant} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
