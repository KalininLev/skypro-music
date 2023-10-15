import {
  StyledTracklistCenterblockSearch,
  StyledTracklistCenterblockSearchSvg,
  StyledTracklistCenterblockSearchText,
} from "../Tracklist/TracklistStyled";

function SearchBar() {
  return (
    <StyledTracklistCenterblockSearch>
      <StyledTracklistCenterblockSearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </StyledTracklistCenterblockSearchSvg>
      <StyledTracklistCenterblockSearchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </StyledTracklistCenterblockSearch>
  );
}

export default SearchBar;
