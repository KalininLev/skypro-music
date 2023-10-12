import styled from "styled-components";
import { gradient } from "../../StyledApp";

//Tracklist.jsx
export const StyledTracklistCenterblockMain = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const StyledTracklistCenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const StyledTracklistCenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const StyledTracklistCenterblockContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const StyledTracklistCenterblockContentTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const StyledCol01 = styled(StyledTracklistCenterblockContentTitleCol)`
  width: 447px;
`;

export const StyledCol02 = styled(StyledTracklistCenterblockContentTitleCol)`
  width: 321px;
`;

export const StyledCol03 = styled(StyledTracklistCenterblockContentTitleCol)`
  width: 245px;
`;

export const StyledCol04 = styled(StyledTracklistCenterblockContentTitleCol)`
  width: 60px;
  text-align: end;
`;

export const StyledTracklistCenterblockContentTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

//FilterBar.jsx
export const StyledTracklistCenterblockFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 51px;
`;

export const StyledTracklistCenterblockFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const StyledTracklistCenterblockFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

//FilterButton.jsx
export const StyledTracklistCenterblockFilterBox = styled.div`
  position: relative;
`;

export const StyledTracklistCenterblockFilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
`;

export const StyledTracklistCenterblockFilterDropdownToggle = styled.ul`
  position: absolute;
  margin-top: 10px;
  left: 0;
  top: 35px;
  padding: 1em 1em;
  background: #0e0e0e;
  border-radius: 7px;
  width: 300px;
  height: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  border: #a8a8a8 1px solid;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 5px; /* ширина для вертикального скролла */
    border-radius: 25px;
    background-color: #838383;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ad61ff;
    border-radius: 20px;
  }
`;

export const StyledTracklistCenterblockFilterDropdownItem = styled.a`
  color: #ffffff;
  font-size: 18px;

  &:hover {
    color: #ad61ff;
    text-decoration: underline;
  }
`;

//Playlist.jsx
export const StyledTracklistContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

//SearchBar.jsx
export const StyledTracklistCenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
`;

export const StyledTracklistCenterblockSearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;

export const StyledTracklistCenterblockSearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

//Track.jsx
export const StyledTracklistPlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const StyledTracklistPlaylistTrack = styled.div`
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const StyledTracklistPlaylistTrackTitle = styled.div`
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
  width: 447px;
`;

export const StyledTracklistPlaylistTrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const StyledTracklistPlaylistTrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const StyledTracklistPlaylistTrackTitleText = styled.div``;

export const StyledTracklistPlaylistTrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const StyledTracklistPlaylistTrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const StyledTracklistPlaylistTrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const StyledTracklistPlaylistTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

export const StyledTracklistPlaylistTrackAlbum = styled.div`
  width: 245px;
`;

export const StyledTracklistPlaylistTrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const StyledTracklistPlaylistTrackTime = styled.div``;

export const StyledTracklistPlaylistTrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

export const StyledTracklistPlaylistTrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

export const StyledTracklistSkeletons = styled.div``;
