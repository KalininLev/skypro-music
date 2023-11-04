import { useContext } from "react";
import {
  StyledSidebarIcon,
  StyledSidebarIconSvg,
} from "../Sidebar/SidebarStyled";
import { UserContext } from "../../contexts/authorizationContexts";

export function SidebarLogOutButton() {
  const user = useContext(UserContext);
  return (
    <StyledSidebarIcon
      handleClick={() => {
        user.logOut();
        user.setUser(null);
      }}
    >
      <StyledSidebarIconSvg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout" />
      </StyledSidebarIconSvg>
    </StyledSidebarIcon>
  );
}
