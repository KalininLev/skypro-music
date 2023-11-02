import { useState } from "react";
import { NavButton } from "../NavMenuButtons/NavMenuButtons";
import { NavBurgerButton } from "../NavBurgerButton/NavBurgerButton";
import {
  StyledNavMenu,
  StyledNavMenuList,
  StyledNavMenuLogo,
  StyledNavMenuLogoImg,
  StyledNavMenuNav,
} from "./NavMenuStyled";

export function NavMenu() {
  const [isVilible, setVisibility] = useState(false);

  return (
    <StyledNavMenuNav>
      <StyledNavMenuLogo>
        <StyledNavMenuLogoImg src="img/logo.png" alt="logo" />
      </StyledNavMenuLogo>
      <NavBurgerButton
        handleClick={() => {
          setVisibility(!isVilible);
        }}
      />
      <StyledNavMenu>
        {isVilible && (
          <StyledNavMenuList>
            <NavButton $buttonName="Главное" Link="/" />
            <NavButton $buttonName="Мой плейлист" Link="/favorites" />
            <NavButton $buttonName="Войти" Link="/login" />
          </StyledNavMenuList>
        )}
      </StyledNavMenu>
    </StyledNavMenuNav>
  );
}
