import PlayTrackBar from "../PlayTrackBar/PlayTrackBar";
import PlayerControls from "../PlayerControls/PlayerControls";
import VolumeBar from "../VolumeBar/VolumeBar";
import {
  StyledAudioBar,
  StyledAudioBarContent,
  StyledAudioBarPlayer,
  StyledAudioBarPlayerBlock,
  StyledAudioBarPlayerProgress,
} from "./AudioPlayerStyled.js";

function AudioPlayer() {
  return (
    <StyledAudioBar>
      <StyledAudioBarContent>
        <StyledAudioBarPlayerProgress />
        <StyledAudioBarPlayerBlock>
          <StyledAudioBarPlayer>
            <PlayerControls />
            <PlayTrackBar />
          </StyledAudioBarPlayer>
          <VolumeBar />
        </StyledAudioBarPlayerBlock>
      </StyledAudioBarContent>
    </StyledAudioBar>
  );
}

export default AudioPlayer;
