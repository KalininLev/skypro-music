import { useEffect, useState } from "react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Tracklist } from "../../components/Tracklist/Tracklist";
import { getTrackList } from "../../api";
import { trackListForSkeleton } from "../../modules/constTrackList";
import {
  StyledApp,
  StyledAppContainer,
  StyledAppMain,
  StyledAppWrapper,
} from "./StyledApp";

export function MainPage() {
  const [isLoading, setLoadingStatus] = useState(true);
  const [trackList, setTrackList] = useState(trackListForSkeleton);
  const [isPlayed, setPlay] = useState(false);
  const [track, setTrack] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoadingStatus(true);

    getTrackList()
      .then((tracks) => {
        setTrackList(tracks);
        setLoadingStatus(false);
      })
      .catch(() => {
        setLoadingStatus(false);
        setError(true);
      });
  }, []);

  return (
    <StyledApp>
      <StyledAppWrapper>
        <StyledAppContainer>
          <StyledAppMain>
            <NavMenu />
            <Tracklist
              isError={isError}
              trackList={trackList}
              setTrackList={setTrackList}
              isLoading={isLoading}
              setLoadingStatus={setLoadingStatus}
              setPlay={setPlay}
              setTrack={setTrack}
            />
            <Sidebar isLoading={isLoading} />
          </StyledAppMain>
          {isPlayed && <AudioPlayer track={track} />}
          <footer className="footer" />
        </StyledAppContainer>
      </StyledAppWrapper>
    </StyledApp>
  );
}
