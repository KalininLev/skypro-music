import {
  StyledNavMenuBurger,
  StyledNavMenuBurgerLine,
} from "../NavMenu/NavMenuStyled";

export function NavBurgerButton({ handleClick }) {
  return (
    <StyledNavMenuBurger onClick={handleClick} role="button">
      <StyledNavMenuBurgerLine />
      <StyledNavMenuBurgerLine />
      <StyledNavMenuBurgerLine />
    </StyledNavMenuBurger>
  );
}
