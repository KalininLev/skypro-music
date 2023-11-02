import { StyledProgressInput } from "./ProgressBarStyled";

export function ProgressInput({ duration, progress, onChange }) {
  return (
    <StyledProgressInput
      type="range"
      min={0}
      max={duration || 0}
      value={progress}
      step={0.01}
      onChange={onChange}
      $color="#b672ff"
    />
  );
}
