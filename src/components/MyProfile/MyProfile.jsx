import { useContext } from "react";
import {
  StyledSidebarPersonal,
  StyledSidebarPersonalName,
} from "../Sidebar/SidebarStyled";
import { SidebarLogOutButton } from "../SidebarLogOutButton/SidebarLogOutButton";
import { UserContext } from "../../contexts/authorizationContexts";

export function MyProfile() {
  const user = useContext(UserContext);
  return (
    <StyledSidebarPersonal>
      <StyledSidebarPersonalName>
        {user.user.userName}
      </StyledSidebarPersonalName>
      <SidebarLogOutButton />
    </StyledSidebarPersonal>
  );
}
