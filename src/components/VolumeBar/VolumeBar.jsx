import {
  StyledAudioBarVolumeBlock,
  StyledAudioPlayerVolumeContent,
  StyledAudioPlayerVolumeImage,
  StyledAudioPlayerVolumeImageSvg,
  StyledAudioPlayerVolumeProgress,
  StyledAudioPlayerVolumeProgressLine,
} from "../AudioPlayer/AudioPlayerStyled";

function VolumeBar() {
  return (
    <StyledAudioBarVolumeBlock>
      <StyledAudioPlayerVolumeContent>
        <StyledAudioPlayerVolumeImage>
          <StyledAudioPlayerVolumeImageSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </StyledAudioPlayerVolumeImageSvg>
        </StyledAudioPlayerVolumeImage>
        <StyledAudioPlayerVolumeProgress className="_btn">
          <StyledAudioPlayerVolumeProgressLine
            className="_btn"
            type="range"
            name="range"
          />
        </StyledAudioPlayerVolumeProgress>
      </StyledAudioPlayerVolumeContent>
    </StyledAudioBarVolumeBlock>
  );
}

export default VolumeBar;
