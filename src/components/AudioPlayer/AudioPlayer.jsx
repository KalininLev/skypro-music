import { useEffect, useRef, useState } from "react";
import { PlayTrackBar } from "../PlayTrackBar/PlayTrackBar";
import { PlayerControls } from "../PlayerControls/PlayerControls";
import { VolumeBar } from "../VolumeBar/VolumeBar";
import { ProgressInput } from "../ProgressBar/ProgressBar";
import {
  StyledAudio,
  StyledAudioBar,
  StyledAudioBarContent,
  StyledAudioBarPlayer,
  StyledAudioBarPlayerBlock,
  StyledAudioBarTimer,
} from "./AudioPlayerStyled.js";
import { audioBarTimer } from "../../modules/correctTime.js";

export function AudioPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(track);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volumeLevel, setVolumeLevel] = useState(15);

  const audioRef = useRef(null);

  useEffect(() => {
    if (track !== currentTrack) {
      setIsPlaying(false);
      setCurrentTrack(track);
      audioRef.current.load();
    }
  }, [track, currentTrack]);

  useEffect(() => {
    setDuration(audioRef.current.duration);
  });

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLooping(true);
  };

  const handleNotLoop = () => {
    audioRef.current.loop = false;
    setIsLooping(false);
  };
  const toggleLoop = isLooping ? handleNotLoop : handleLoop;

  return (
    <StyledAudioBar>
      <StyledAudioBarContent>
        <StyledAudioBarTimer>
          <div>{audioBarTimer(progress)}</div>
          <div>
            {duration ? audioBarTimer(duration) : audioBarTimer(track.duration)}
          </div>
        </StyledAudioBarTimer>
        <ProgressInput
          duration={duration}
          progress={progress}
          onChange={(event) => {
            audioRef.current.currentTime = event.target.value;
          }}
        />
        <StyledAudioBarPlayerBlock>
          <StyledAudioBarPlayer>
            <StyledAudio
              ref={audioRef}
              onTimeUpdate={() => {
                setProgress(audioRef.current.currentTime);
              }}
            >
              <source src={currentTrack.trackFile} type="audio/mp3" />
              <track src="" kind="captions" label="english_captions" />
            </StyledAudio>
            <PlayerControls
              togglePlay={togglePlay}
              toggleLoop={toggleLoop}
              isPlaying={isPlaying}
              $isLooping={isLooping}
            />
            <PlayTrackBar track={track} />
          </StyledAudioBarPlayer>
          <VolumeBar
            volumeLevel={volumeLevel}
            onChange={(event) => {
              setVolumeLevel(event.target.value);
              audioRef.current.volume = volumeLevel / 100;
            }}
          />
        </StyledAudioBarPlayerBlock>
      </StyledAudioBarContent>
    </StyledAudioBar>
  );
}
