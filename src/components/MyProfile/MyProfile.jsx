import {
  StyledSidebarPersonal,
  StyledSidebarPersonalName,
} from "../Sidebar/SidebarStyled";
import SidebarLogOutButton from "../SidebarLogOutButton/SidebarLogOutButton";

function MyProfile() {
  return (
    <StyledSidebarPersonal>
      <StyledSidebarPersonalName>Sergey.Ivanov</StyledSidebarPersonalName>
      <SidebarLogOutButton />
    </StyledSidebarPersonal>
  );
}

export default MyProfile;
