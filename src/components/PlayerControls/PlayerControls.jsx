import { StyledAudioPlayerControls } from "../AudioPlayer/AudioPlayerStyled";
import { PlayerButton } from "../PlayerButton/PlayerButton";

export function PlayerControls() {
  return (
    <StyledAudioPlayerControls>
      <PlayerButton buttonName="prev" />
      <PlayerButton buttonName="play" />
      <PlayerButton buttonName="next" />
      <PlayerButton buttonName="repeat" />
      <PlayerButton buttonName="shuffle" />
    </StyledAudioPlayerControls>
  );
}
