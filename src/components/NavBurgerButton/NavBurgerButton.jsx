import {
  StyledNavMenuBurger,
  StyledNavMenuBurgerLine,
} from "../NavMenu/NavMenuStyled";

function NavBurgerButton({ handleClick }) {
  return (
    <StyledNavMenuBurger onClick={handleClick} role="button">
      <StyledNavMenuBurgerLine />
      <StyledNavMenuBurgerLine />
      <StyledNavMenuBurgerLine />
    </StyledNavMenuBurger>
  );
}

export default NavBurgerButton;
