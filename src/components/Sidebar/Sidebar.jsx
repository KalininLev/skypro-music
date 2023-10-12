import MyProfile from "../MyProfile/MyProfile";
import {
  StyledSidebarBlock,
  StyledSidebarImg,
  StyledSidebarItem,
  StyledSidebarLink,
  StyledSidebarList,
  StyledSidebarMain,
  StyledSidebarSkeletons,
} from "./SidebarStyled";

function Sidebar({ isLoading }) {
  return (
    <StyledSidebarMain>
      <MyProfile />
      <StyledSidebarBlock>
        <StyledSidebarList>
          <StyledSidebarItem>
            {isLoading ? (
              <StyledSidebarSkeletons className="skeletons" />
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
              <StyledSidebarSkeletons className="skeletons" />
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
              <StyledSidebarSkeletons className="skeletons" />
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
    </StyledSidebarMain>
  );
}

export default Sidebar;
