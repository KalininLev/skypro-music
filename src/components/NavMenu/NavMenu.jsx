import { useState } from "react";
import "./NavMenu.css";
import NavHomePageButton from "../NavHomePageButton/NavHomePageButton";
import NavMyPlaylistButton from "../NavMyPlaylistButton/NavMyPlaylistButton";
import NavSighInButton from "../NavSighInButton/NavSighInButton";
import NavBurgerButton from "../NavBurgerButton/NavBurgerButton";

function NavMenu() {
  const [isVilible, setVisibility] = useState(false);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <NavBurgerButton
        handleClick={() => {
          setVisibility(!isVilible);
        }}
      />
      <div className="nav__menu menu">
        {isVilible && (
          <ul className="menu__list">
            <NavHomePageButton />
            <NavMyPlaylistButton />
            <NavSighInButton />
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavMenu;
