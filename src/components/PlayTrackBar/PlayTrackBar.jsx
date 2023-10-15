import {
  StyledAudioPlayerTrackPlay,
  StyledAudioPlayerTrackPlayAlbum,
  StyledAudioPlayerTrackPlayAlbumLink,
  StyledAudioPlayerTrackPlayAuthor,
  StyledAudioPlayerTrackPlayAuthorLink,
  StyledAudioPlayerTrackPlayContain,
  StyledAudioPlayerTrackPlayDislikeSvg,
  StyledAudioPlayerTrackPlayImage,
  StyledAudioPlayerTrackPlayLike,
  StyledAudioPlayerTrackPlayLikeDis,
  StyledAudioPlayerTrackPlayLikeSvg,
  StyledAudioPlayerTrackPlaySvg,
} from "../AudioPlayer/AudioPlayerStyled";

function PlayTrackBar() {
  return (
    <StyledAudioPlayerTrackPlay>
      <StyledAudioPlayerTrackPlayContain>
        <StyledAudioPlayerTrackPlayImage>
          <StyledAudioPlayerTrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </StyledAudioPlayerTrackPlaySvg>
        </StyledAudioPlayerTrackPlayImage>
        <StyledAudioPlayerTrackPlayAuthor>
          <StyledAudioPlayerTrackPlayAuthorLink href="http://">
            Ты та...
          </StyledAudioPlayerTrackPlayAuthorLink>
        </StyledAudioPlayerTrackPlayAuthor>
        <StyledAudioPlayerTrackPlayAlbum>
          <StyledAudioPlayerTrackPlayAlbumLink href="http://">
            Баста
          </StyledAudioPlayerTrackPlayAlbumLink>
        </StyledAudioPlayerTrackPlayAlbum>
      </StyledAudioPlayerTrackPlayContain>

      <StyledAudioPlayerTrackPlayLikeDis>
        <StyledAudioPlayerTrackPlayLike className="_btn-icon">
          <StyledAudioPlayerTrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </StyledAudioPlayerTrackPlayLikeSvg>
        </StyledAudioPlayerTrackPlayLike>
        <dStyledAudioPlayerTrackPlayDislike
          className="_btn-icon"
          style={{ marginLeft: 28.5 + "px" }}
        >
          <StyledAudioPlayerTrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </StyledAudioPlayerTrackPlayDislikeSvg>
        </dStyledAudioPlayerTrackPlayDislike>
      </StyledAudioPlayerTrackPlayLikeDis>
    </StyledAudioPlayerTrackPlay>
  );
}

export default PlayTrackBar;
