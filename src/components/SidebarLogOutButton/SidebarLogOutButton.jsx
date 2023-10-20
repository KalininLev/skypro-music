import { StyledSidebarIcon } from "../Sidebar/SidebarStyled";

export function SidebarLogOutButton() {
  return (
    <StyledSidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout" />
      </svg>
    </StyledSidebarIcon>
  );
}
