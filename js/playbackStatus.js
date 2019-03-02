export default function playbackStatus() {
  const playbackStatus = {
    isPaused: false,
    iterationNumber: 0,
    animationLoop: null
  };

  const getPlaybackStatus = () => {
    return playbackStatus;
  };

  const playPause = (callback) => {
    playbackStatus.isPaused = !playbackStatus.isPaused;
    if (playbackStatus.isPaused) clearInterval(playbackStatus.animationLoop);
    else callback();
  };

  const clearPlaybackStatus = () => {
    clearInterval(playbackStatus.animationLoop);
    playbackStatus.isPaused = false;
    playbackStatus.iterationNumber = 0;
  };

  return {
    getPlaybackStatus,
    playPause,
    clearPlaybackStatus
  };
}

