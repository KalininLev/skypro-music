import {
  StyledTracklistPlaylistItem,
  StyledTracklistPlaylistTrack,
  StyledTracklistPlaylistTrackAlbum,
  StyledTracklistPlaylistTrackAlbumLink,
  StyledTracklistPlaylistTrackAuthor,
  StyledTracklistPlaylistTrackAuthorLink,
  StyledTracklistPlaylistTrackTime,
  StyledTracklistPlaylistTrackTimeSvg,
  StyledTracklistPlaylistTrackTimeText,
  StyledTracklistPlaylistTrackTitle,
  StyledTracklistPlaylistTrackTitleImage,
  StyledTracklistPlaylistTrackTitleLink,
  StyledTracklistPlaylistTrackTitleSpan,
  StyledTracklistPlaylistTrackTitleSvg,
} from "../Tracklist/TracklistStyled";

function Track(props) {
  return (
    <StyledTracklistPlaylistItem>
      <StyledTracklistPlaylistTrack>
        <StyledTracklistPlaylistTrackTitle>
          <StyledTracklistPlaylistTrackTitleImage>
            <StyledTracklistPlaylistTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </StyledTracklistPlaylistTrackTitleSvg>
          </StyledTracklistPlaylistTrackTitleImage>
          <div
            className={`track__title-text ${
              props.isLoading ? "skeletons" : ""
            }`}
          >
            <StyledTracklistPlaylistTrackTitleLink
              style={props.isLoading ? { color: "transparent" } : {}}
              href="http://"
            >
              {props.isLoading ? "waitingTrack" : props.song}{" "}
              <StyledTracklistPlaylistTrackTitleSpan>
                {props.isLoading ? "" : props.moreInfo}
              </StyledTracklistPlaylistTrackTitleSpan>
            </StyledTracklistPlaylistTrackTitleLink>
          </div>
        </StyledTracklistPlaylistTrackTitle>
        <StyledTracklistPlaylistTrackAuthor
          className={`track__author ${props.isLoading ? "skeletons" : ""}`}
        >
          <StyledTracklistPlaylistTrackAuthorLink
            style={props.isLoading ? { color: "transparent" } : {}}
            href="http://"
          >
            {props.isLoading ? "waitingAuthor" : props.author}
          </StyledTracklistPlaylistTrackAuthorLink>
        </StyledTracklistPlaylistTrackAuthor>
        <StyledTracklistPlaylistTrackAlbum
          className={`track__album ${props.isLoading ? "skeletons" : ""}`}
        >
          <StyledTracklistPlaylistTrackAlbumLink
            style={props.isLoading ? { color: "transparent" } : {}}
            href="http://"
          >
            {props.isLoading ? "waitingAlbum" : props.album}
          </StyledTracklistPlaylistTrackAlbumLink>
        </StyledTracklistPlaylistTrackAlbum>
        <StyledTracklistPlaylistTrackTime>
          <StyledTracklistPlaylistTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </StyledTracklistPlaylistTrackTimeSvg>
          <StyledTracklistPlaylistTrackTimeText>
            {props.isLoading ? "0:00" : props.time}
          </StyledTracklistPlaylistTrackTimeText>
        </StyledTracklistPlaylistTrackTime>
      </StyledTracklistPlaylistTrack>
    </StyledTracklistPlaylistItem>
  );
}

export default Track;
