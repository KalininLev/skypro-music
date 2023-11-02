import { StyledAudioPlayerControls } from "../AudioPlayer/AudioPlayerStyled";
import { PlayerButton } from "../PlayerButton/PlayerButton";

export function PlayerControls({
  togglePlay,
  isPlaying,
  toggleLoop,
  $isLooping,
}) {
  return (
    <StyledAudioPlayerControls>
      <PlayerButton $buttonName="prev" />
      <PlayerButton
        handleClick={togglePlay}
        $buttonName={`${isPlaying ? "pause" : "play"}`}
      />
      <PlayerButton $buttonName="next" />
      <PlayerButton
        $buttonName="repeat"
        handleClick={toggleLoop}
        $isLooping={$isLooping}
      />
      <PlayerButton $buttonName="shuffle" />
    </StyledAudioPlayerControls>
  );
}
