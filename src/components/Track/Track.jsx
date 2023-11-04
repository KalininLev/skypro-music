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
  StyledTracklistPlaylistTrackTitleText,
} from "../Tracklist/TracklistStyled";

export function Track(props) {
  return (
    <StyledTracklistPlaylistItem>
      <StyledTracklistPlaylistTrack>
        <StyledTracklistPlaylistTrackTitle>
          <StyledTracklistPlaylistTrackTitleImage>
            <StyledTracklistPlaylistTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </StyledTracklistPlaylistTrackTitleSvg>
          </StyledTracklistPlaylistTrackTitleImage>
          <StyledTracklistPlaylistTrackTitleText
            className={`track__title-text ${
              props.$isLoading ? "skeletons" : ""
            }`}
          >
            <StyledTracklistPlaylistTrackTitleLink
              style={props.isLoading ? { color: "transparent" } : {}}
              onClick={() => {
                props.setPlay(true);
                props.setTrack({
                  name: props.song,
                  author: props.author,
                  trackFile: props.trackFile,
                  duration: props.trackDuration,
                });
              }}
            >
              {props.$isLoading ? "waitingTrack" : props.song}{" "}
              <StyledTracklistPlaylistTrackTitleSpan />
            </StyledTracklistPlaylistTrackTitleLink>
          </StyledTracklistPlaylistTrackTitleText>
        </StyledTracklistPlaylistTrackTitle>
        <StyledTracklistPlaylistTrackAuthor
          className={`track__author ${props.$isLoading ? "skeletons" : ""}`}
        >
          <StyledTracklistPlaylistTrackAuthorLink
            style={props.$isLoading ? { color: "transparent" } : {}}
            href="http://"
          >
            {props.$isLoading ? "waitingAuthor" : props.author}
          </StyledTracklistPlaylistTrackAuthorLink>
        </StyledTracklistPlaylistTrackAuthor>
        <StyledTracklistPlaylistTrackAlbum
          className={`track__album ${props.$isLoading ? "skeletons" : ""}`}
        >
          <StyledTracklistPlaylistTrackAlbumLink
            style={props.$isLoading ? { color: "transparent" } : {}}
            href="http://"
          >
            {props.$isLoading ? "waitingAlbum" : props.album}
          </StyledTracklistPlaylistTrackAlbumLink>
        </StyledTracklistPlaylistTrackAlbum>
        <StyledTracklistPlaylistTrackTime>
          <StyledTracklistPlaylistTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </StyledTracklistPlaylistTrackTimeSvg>
          <StyledTracklistPlaylistTrackTimeText>
            {props.$isLoading ? "0:00" : props.time}
          </StyledTracklistPlaylistTrackTimeText>
        </StyledTracklistPlaylistTrackTime>
      </StyledTracklistPlaylistTrack>
    </StyledTracklistPlaylistItem>
  );
}
