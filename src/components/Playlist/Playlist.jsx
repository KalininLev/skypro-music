import { Track } from "../Track/Track";
import { correctTime } from "../../modules/correctTime";
import { StyledTracklistContentPlaylist } from "../Tracklist/TracklistStyled";

export function Playlist({ $isLoading, trackList, setPlay, setTrack }) {
  return (
    <StyledTracklistContentPlaylist>
      {trackList.map((track) => (
        <Track
          setTrack={setTrack}
          $isLoading={$isLoading}
          key={track.id}
          song={track.name}
          author={track.author}
          album={track.album}
          time={correctTime(track.duration_in_seconds)}
          setPlay={setPlay}
          trackFile={track.track_file}
          trackDuration={track.duration_in_seconds}
        />
      ))}
    </StyledTracklistContentPlaylist>
  );
}
