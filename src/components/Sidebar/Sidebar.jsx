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
              <StyledSidebarLink to="/category/day's-playlist">
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
              <StyledSidebarLink to="/category/100-dance-hits">
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
              <StyledSidebarLink to="/category/indie-charge">
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
