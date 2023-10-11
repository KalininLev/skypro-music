import FilterBar from "../FilterBar/FilterBar";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import {
  StyledCol01,
  StyledCol02,
  StyledCol03,
  StyledCol04,
  StyledTracklistCenterblockContent,
  StyledTracklistCenterblockContentTitle,
  StyledTracklistCenterblockContentTitleSvg,
  StyledTracklistCenterblockH2,
} from "./TracklistStyled";

function Tracklist({ isLoading }) {
  return (
    <div className="main__centerblock centerblock">
      <SearchBar />
      <StyledTracklistCenterblockH2>Треки</StyledTracklistCenterblockH2>
      <FilterBar />
      <StyledTracklistCenterblockContent>
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
        <Playlist isLoading={isLoading} />
      </StyledTracklistCenterblockContent>
    </div>
  );
}

export default Tracklist;
