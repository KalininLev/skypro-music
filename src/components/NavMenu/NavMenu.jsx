import { useState } from "react";
import NavHomePageButton from "../NavHomePageButton/NavHomePageButton";
import NavMyPlaylistButton from "../NavMyPlaylistButton/NavMyPlaylistButton";
import NavSighInButton from "../NavSighInButton/NavSighInButton";
import NavBurgerButton from "../NavBurgerButton/NavBurgerButton";
import {
  StyledNavMenu,
  StyledNavMenuList,
  StyledNavMenuLogo,
  StyledNavMenuLogoImg,
} from "./NavMenuStyled";

function NavMenu() {
  const [isVilible, setVisibility] = useState(false);

  return (
    <nav className="main__nav nav">
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
            <NavHomePageButton />
            <NavMyPlaylistButton />
            <NavSighInButton />
          </StyledNavMenuList>
        )}
      </StyledNavMenu>
    </nav>
  );
}

export default NavMenu;
