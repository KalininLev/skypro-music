import Track from "../Track/Track";
import getTracksList from "../../modules/getTrackList";
import { StyledTracklistContentPlaylist } from "../Tracklist/TracklistStyled";

function Playlist({ isLoading }) {
  return (
    <StyledTracklistContentPlaylist>
      {getTracksList().map((track) => (
        <Track
          isLoading={isLoading}
          key={track.id}
          song={track.song}
          author={track.author}
          album={track.album}
          moreInfo={track.moreInfo}
          time={track.time}
        />
      ))}
    </StyledTracklistContentPlaylist>
  );
}

export default Playlist;
