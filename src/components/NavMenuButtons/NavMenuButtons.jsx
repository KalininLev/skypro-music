import { StyledNavMenuItem, StyledNavMenuLink } from "../NavMenu/NavMenuStyled";

export function NavButton(props) {
  return (
    <StyledNavMenuItem className="menu__item">
      <StyledNavMenuLink to={props.Link}>{props.Name}</StyledNavMenuLink>
    </StyledNavMenuItem>
  );
}
