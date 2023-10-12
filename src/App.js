import { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import Sidebar from "./components/Sidebar/Sidebar";
import Tracklist from "./components/Tracklist/Tracklist";
import delay from "./modules/delay";
import {
  StyledApp,
  StyledAppContainer,
  StyledAppMain,
  StyledAppWrapper,
} from "./StyledApp";

function App() {
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    delay(3000).then(() => {
      setLoadingStatus(!isLoading);
    });
  }, [false]);
  return (
    <StyledApp>
      <StyledAppWrapper>
        <StyledAppContainer>
          <StyledAppMain>
            <NavMenu />
            <Tracklist isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </StyledAppMain>
          <AudioPlayer />
          <footer className="footer" />
        </StyledAppContainer>
      </StyledAppWrapper>
    </StyledApp>
  );
}

export default App;
