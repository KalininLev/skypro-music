import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradient } from "../../pages/main/StyledApp";

//Sidebar.jsx
export const StyledSidebarMain = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

export const StyledSidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const StyledSidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const StyledSidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const StyledSidebarSkeletons = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0),
    rgb(77, 77, 77),
    rgb(150, 150, 150)
  );
  background-size: 400% 400%;
  animation: ${gradient} 5s ease infinite;
  transform: translate3d(0, 0, 0);
`;

export const StyledSidebarLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const StyledSidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

//MyProfile.jsx
export const StyledSidebarPersonal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;

export const StyledSidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

//SidebarLogOutButton.jsx
export const StyledSidebarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledSidebarIconSvg = styled.svg`
  background-color: transparent;
`;
