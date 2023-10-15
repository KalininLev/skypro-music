import { useState } from "react";
import ButtonsForFilter from "../FilterButton/FilterButton";
import getTracksList from "../../modules/getTrackList";
import {
  StyledTracklistCenterblockFilter,
  StyledTracklistCenterblockFilterTitle,
  StyledTracklistCenterblockFilterWrapper,
} from "../Tracklist/TracklistStyled";

function FilterBar() {
  const authorList = getTracksList().map((track) => ({
    info: track.author,
    id: track.id,
  }));

  const yearsList = [
    { id: "0", info: "2023" },
    { id: "1", info: "2022" },
    { id: "2", info: "2021" },
    { id: "3", info: "2020" },
    { id: "4", info: "2019" },
    { id: "5", info: "2018" },
    { id: "6", info: "2017" },
    { id: "7", info: "2016" },
    { id: "8", info: "2015" },
    { id: "9", info: "2014" },
    { id: "10", info: "2013" },
    { id: "11", info: "2012" },
  ];

  const genresList = [
    { id: "0", info: "Хип-хоп" },
    { id: "1", info: "Классика" },
    { id: "2", info: "Рок" },
    { id: "3", info: "Танцевальная" },
    { id: "4", info: "Кантри" },
    { id: "5", info: "Блюз" },
    { id: "6", info: "Регги" },
    { id: "7", info: "Фанк" },
  ];

  const [isVisibleFirst, setVisibilityFirst] = useState(false);
  const [isVisibleSecond, setVisibilitySecond] = useState(false);
  const [isVisibleThird, setVisibilityThird] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <StyledTracklistCenterblockFilter>
      <StyledTracklistCenterblockFilterWrapper>
        <StyledTracklistCenterblockFilterTitle>
          Искать по:
        </StyledTracklistCenterblockFilterTitle>
        <ButtonsForFilter
          setVisibility={() => {
            setVisibilityFirst(!isVisibleFirst);
            setVisibilitySecond(false);
            setVisibilityThird(false);
            setSelected(1);
            if (selected === 1) {
              setSelected(0);
            }
          }}
          isVisible={isVisibleFirst}
          buttonName="исполнителю"
          list={authorList}
          itemId={1}
          selected={selected}
        />

        <ButtonsForFilter
          setVisibility={() => {
            setVisibilityFirst(false);
            setVisibilitySecond(!isVisibleSecond);
            setVisibilityThird(false);
            setSelected(2);
            if (selected === 2) {
              setSelected(0);
            }
          }}
          isVisible={isVisibleSecond}
          buttonName="году выпуска"
          list={yearsList}
          itemId={2}
          selected={selected}
        />

        <ButtonsForFilter
          setVisibility={() => {
            setVisibilityFirst(false);
            setVisibilitySecond(false);
            setVisibilityThird(!isVisibleThird);
            setSelected(3);
            if (selected === 3) {
              setSelected(0);
            }
          }}
          isVisible={isVisibleThird}
          buttonName="жанру"
          list={genresList}
          itemId={3}
          selected={selected}
        />
      </StyledTracklistCenterblockFilterWrapper>
    </StyledTracklistCenterblockFilter>
  );
}

export default FilterBar;
