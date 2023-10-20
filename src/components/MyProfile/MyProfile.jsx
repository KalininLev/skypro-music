import {
  StyledSidebarPersonal,
  StyledSidebarPersonalName,
} from "../Sidebar/SidebarStyled";
import { SidebarLogOutButton } from "../SidebarLogOutButton/SidebarLogOutButton";

export function MyProfile() {
  return (
    <StyledSidebarPersonal>
      <StyledSidebarPersonalName>Sergey.Ivanov</StyledSidebarPersonalName>
      <SidebarLogOutButton />
    </StyledSidebarPersonal>
  );
}
