import { StyledSidebarIcon } from "../Sidebar/SidebarStyled";

function SidebarLogOutButton() {
  return (
    <StyledSidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout" />
      </svg>
    </StyledSidebarIcon>
  );
}

export default SidebarLogOutButton;
