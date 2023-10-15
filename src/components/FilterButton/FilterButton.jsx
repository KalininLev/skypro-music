import {
  StyledTracklistCenterblockFilterBox,
  StyledTracklistCenterblockFilterButton,
  StyledTracklistCenterblockFilterDropdownItem,
  StyledTracklistCenterblockFilterDropdownToggle,
} from "../Tracklist/TracklistStyled";

function ButtonsForFilter({
  buttonName,
  setVisibility,
  isVisible,
  list,
  selected,
  itemId,
}) {
  return (
    <StyledTracklistCenterblockFilterBox>
      <StyledTracklistCenterblockFilterButton
        onClick={setVisibility}
        role="button"
        className={` ${
          selected === itemId ? "filter__button_active" : ""
        } _btn-text`}
      >
        {buttonName}
      </StyledTracklistCenterblockFilterButton>
      {isVisible && (
        <StyledTracklistCenterblockFilterDropdownToggle>
          {list.map((item) => (
            <li key={item.id}>
              <StyledTracklistCenterblockFilterDropdownItem href="/#">
                {item.info}
              </StyledTracklistCenterblockFilterDropdownItem>
            </li>
          ))}
        </StyledTracklistCenterblockFilterDropdownToggle>
      )}
    </StyledTracklistCenterblockFilterBox>
  );
}

export default ButtonsForFilter;
