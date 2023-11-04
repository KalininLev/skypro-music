import {
  StyledAudioBarVolumeBlock,
  StyledAudioPlayerVolumeContent,
  StyledAudioPlayerVolumeImage,
  StyledAudioPlayerVolumeImageSvg,
  StyledAudioPlayerVolumeProgress,
  StyledAudioPlayerVolumeProgressLine,
} from "../AudioPlayer/AudioPlayerStyled";

export function VolumeBar({ onChange, volumeLevel }) {
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
            min="0"
            max="100"
            value={volumeLevel}
            onChange={onChange}
          />
        </StyledAudioPlayerVolumeProgress>
      </StyledAudioPlayerVolumeContent>
    </StyledAudioBarVolumeBlock>
  );
}
