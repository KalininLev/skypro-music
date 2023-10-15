import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }

  nav {
    position: relative;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }

  ._btn-text:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  
  ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  
  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  
  .player__btn-prev,
  .player__btn-play,
  .player__btn-next,
  .player__btn-repeat,
  .player__btn-shuffle {
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  
  .player__btn-prev {
    margin-right: 23px;
  }
  
  .player__btn-prev-svg {
    width: 15px;
    height: 14px;
  }
  
  .player__btn-play {
    margin-right: 23px;
  }
  
  .player__btn-play-svg {
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
  }
  
  .player__btn-next {
    margin-right: 28px;
    fill: #a53939;
  }
  
  .player__btn-next-svg {
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
  }
  
  .player__btn-repeat {
    margin-right: 24px;
  }
  
  .player__btn-repeat-svg {
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
  
  .player__btn-shuffle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  
  .player__btn-shuffle-svg {
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
  
  .filter__button_active {
    border-color: #ad61ff;
    color: #ad61ff;
  }



  `;

export default GlobalStyle;
