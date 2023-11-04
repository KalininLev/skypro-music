import {
  StyledPlayerBtn,
  StyledPlayerBtnSvg,
} from "../AudioPlayer/AudioPlayerStyled";

export function PlayerButton(props) {
  return (
    <StyledPlayerBtn
      onClick={props.handleClick}
      $buttonName={props.$buttonName}
    >
      <StyledPlayerBtnSvg
        $isLooping={props.$isLooping}
        $buttonName={props.$buttonName}
      >
        <use href={`img/icon/sprite.svg#icon-${props.$buttonName}`} />
      </StyledPlayerBtnSvg>
    </StyledPlayerBtn>
  );
}
