import { useState, useContext } from "react";
import { NavButton } from "../NavMenuButtons/NavMenuButtons";
import { NavBurgerButton } from "../NavBurgerButton/NavBurgerButton";
import {
  StyledNavMenu,
  StyledNavMenuList,
  StyledNavMenuLogo,
  StyledNavMenuLogoImg,
  StyledNavMenuNav,
} from "./NavMenuStyled";
import { UserContext } from "../../contexts/authorizationContexts";

export function NavMenu() {
  const [isVilible, setVisibility] = useState(false);
  const user = useContext(UserContext);

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
            <NavButton
              handleClick={() => {
                user.logOut();
                user.setUser(null);
              }}
              $buttonName="Выйти"
              Link="/login"
            />
          </StyledNavMenuList>
        )}
      </StyledNavMenu>
    </StyledNavMenuNav>
  );
}
