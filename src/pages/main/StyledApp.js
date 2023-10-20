import styled from "styled-components";
import { keyframes } from "styled-components";

export const gradient = keyframes`
  0% { background-position: 10% 50%; }
  50% { background-position: 65% 50%; }
  100% { background-position: 10% 50%; }
`;

export const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;

export const StyledAppContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

export const StyledAppMain = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const StyledApp = styled.div`
  .skeletons {
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
  }
`;
