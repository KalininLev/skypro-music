import styled from "styled-components";

export const StyledAudioBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const StyledAudioBarTimer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  font-size: 12px;
`;

export const StyledAudioBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const StyledAudioBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

export const StyledAudioBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const StyledAudioBarPlayer = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const StyledAudioBarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const StyledAudioPlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const StyledAudio = styled.audio``;

//PlayerButton.jsx
export const StyledPlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.$buttonName === "prev" ||
    props.$buttonName === "play" ||
    props.$buttonName === "pause"
      ? "margin-right: 23px;"
      : ""}
  ${(props) =>
    props.$buttonName === "next" && "margin-right: 28px; fill: #a53939;"}
  ${(props) => props.$buttonName === "repeat" && "margin-right: 24px;"}
  ${(props) =>
    props.$buttonName === "shuffle" &&
    "display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center;"}
`;

export const StyledPlayerBtnSvg = styled.svg`
  ${(props) =>
    props.$buttonName === "prev" ? "width: 15px; height: 14px;" : ""}
  ${(props) =>
    props.$buttonName === "play" || props.$buttonName === "pause"
      ? "width: 22px; height: 20px; fill: #d9d9d9;"
      : ""}
${(props) =>
    props.$buttonName === "next"
      ? "width: 15px; height: 14px; fill: inherit; stroke: #d9d9d9;"
      : ""}
${(props) =>
    props.$buttonName === "repeat"
      ? "width: 18px; height: 12px; fill: transparent; stroke: #696969;"
      : ""}
${(props) =>
    props.$buttonName === "repeat" && props.$isLooping
      ? "width: 18px; height: 12px; fill: transparent; stroke: #b672ff;"
      : ""}
${(props) =>
    props.$buttonName === "shuffle"
      ? "width: 19px; height: 12px; fill: transparent; stroke: #696969;"
      : ""}
`;

//PlayerTrackBar.jsx
export const StyledAudioPlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const StyledAudioPlayerTrackPlayContain = styled.div`
  min-width: 250px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const StyledAudioPlayerTrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const StyledAudioPlayerTrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const StyledAudioPlayerTrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  max-width: 250px;
`;

export const StyledAudioPlayerTrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const StyledAudioPlayerTrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const StyledAudioPlayerTrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;

export const StyledAudioPlayerTrackPlayLikeDis = styled.div`
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
  margin-left: 26%;
`;

export const StyledAudioPlayerTrackPlayLike = styled.div`
  padding: 5px;
`;

export const StyledAudioPlayerTrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const StyledAudioPlayerTrackPlayDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`;

export const StyledAudioPlayerTrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

//VolumeBar.jsx
export const StyledAudioPlayerVolumeContent = styled.div`
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
  justify-content: end;
`;

export const StyledAudioPlayerVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const StyledAudioPlayerVolumeImageSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const StyledAudioPlayerVolumeProgress = styled.div`
  width: 109px;
`;

export const StyledAudioPlayerVolumeProgressLine = styled.input`
  width: 109px;
`;
