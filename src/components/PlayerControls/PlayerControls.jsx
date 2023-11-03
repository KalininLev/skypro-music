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
      <PlayerButton
        $buttonName="prev"
        handleClick={() => alert("Еще не реализовано")}
      />
      <PlayerButton
        handleClick={togglePlay}
        $buttonName={`${isPlaying ? "pause" : "play"}`}
      />
      <PlayerButton
        $buttonName="next"
        handleClick={() => alert("Еще не реализовано")}
      />
      <PlayerButton
        $buttonName="repeat"
        handleClick={toggleLoop}
        $isLooping={$isLooping}
      />
      <PlayerButton
        $buttonName="shuffle"
        handleClick={() => alert("Еще не реализовано")}
      />
    </StyledAudioPlayerControls>
  );
}
