import MyProfile from "../MyProfile/MyProfile";
import {
  StyledSidebarBlock,
  StyledSidebarImg,
  StyledSidebarItem,
  StyledSidebarLink,
  StyledSidebarList,
} from "./SidebarStyled";

function Sidebar({ isLoading }) {
  return (
    <div className="main__sidebar sidebar">
      <MyProfile />
      <StyledSidebarBlock>
        <StyledSidebarList>
          <StyledSidebarItem>
            {isLoading ? (
              <div className="skeletons" />
            ) : (
              <StyledSidebarLink href="/#">
                <StyledSidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            )}
          </StyledSidebarItem>
          <StyledSidebarItem>
            {isLoading ? (
              <div className="skeletons" />
            ) : (
              <StyledSidebarLink href="/#">
                <StyledSidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            )}
          </StyledSidebarItem>
          <StyledSidebarItem>
            {isLoading ? (
              <div className="skeletons" />
            ) : (
              <StyledSidebarLink href="/#">
                <StyledSidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </StyledSidebarLink>
            )}
          </StyledSidebarItem>
        </StyledSidebarList>
      </StyledSidebarBlock>
    </div>
  );
}

export default Sidebar;
