import { FilterBar } from "../FilterBar/FilterBar";
import { Playlist } from "../Playlist/Playlist";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  StyledCol01,
  StyledCol02,
  StyledCol03,
  StyledCol04,
  StyledTracklistCenterblockContent,
  StyledTracklistCenterblockContentTitle,
  StyledTracklistCenterblockContentTitleSvg,
  StyledTracklistCenterblockH2,
  StyledTracklistCenterblockMain,
} from "./TracklistStyled";

export function Tracklist({
  isLoading,
  setLoadingStatus,
  trackList,
  setTrackList,
  setPlay,
  setTrack,
  isError,
}) {
  return (
    <StyledTracklistCenterblockMain>
      <SearchBar />
      <StyledTracklistCenterblockH2>Треки</StyledTracklistCenterblockH2>
      <FilterBar trackList={trackList} />
      <StyledTracklistCenterblockContent>
        {isError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже!</div>
        ) : (
          <>
            {" "}
            <StyledTracklistCenterblockContentTitle>
              <StyledCol01>Трек</StyledCol01>
              <StyledCol02>ИСПОЛНИТЕЛЬ</StyledCol02>
              <StyledCol03>АЛЬБОМ</StyledCol03>
              <StyledCol04>
                <StyledTracklistCenterblockContentTitleSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </StyledTracklistCenterblockContentTitleSvg>
              </StyledCol04>
            </StyledTracklistCenterblockContentTitle>
            <Playlist
              isLoading={isLoading}
              trackList={trackList}
              setTrackList={setTrackList}
              setLoadingStatus={setLoadingStatus}
              setPlay={setPlay}
              setTrack={setTrack}
            />
          </>
        )}
      </StyledTracklistCenterblockContent>
    </StyledTracklistCenterblockMain>
  );
}
