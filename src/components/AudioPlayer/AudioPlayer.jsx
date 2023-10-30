import { PlayTrackBar } from "../PlayTrackBar/PlayTrackBar";
import { PlayerControls } from "../PlayerControls/PlayerControls";
import { VolumeBar } from "../VolumeBar/VolumeBar";
import {
  StyledAudioBar,
  StyledAudioBarContent,
  StyledAudioBarPlayer,
  StyledAudioBarPlayerBlock,
  StyledAudioBarPlayerProgress,
} from "./AudioPlayerStyled.js";

export function AudioPlayer({ track }) {
  return (
    <StyledAudioBar>
      <StyledAudioBarContent>
        <StyledAudioBarPlayerProgress />
        <StyledAudioBarPlayerBlock>
          <StyledAudioBarPlayer>
            <PlayerControls />
            <PlayTrackBar track={track} />
          </StyledAudioBarPlayer>
          <VolumeBar />
        </StyledAudioBarPlayerBlock>
      </StyledAudioBarContent>
    </StyledAudioBar>
  );
}
