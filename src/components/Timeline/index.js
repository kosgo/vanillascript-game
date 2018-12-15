import { getStore, dispatch } from '../../store';
import {
  removeTime,
  startGame,
  pauseGame,
  finishGame,
} from '../../store/actions';

import * as constants from '../../constants';

const timeline = document.getElementById('timeline');
let countdown;

export const setTimelineToStart = () => {
  timeline.innerHTML = `${constants.fullGameTime} sec`;
  timeline.classList.remove('bg-danger');
  timeline.classList.add('bg-success');
  timeline.style.width = '100%';
};

export const stopTimeline = (type) => {
  if (type === 'pause' && getStore().gameStatus !== constants.GAME_PLAYING) {
    return null;
  }

  clearInterval(countdown);
  timeline.classList.remove('progress-bar-animated');

  if (type === 'pause') {
    dispatch(() => pauseGame());
  } else {
    dispatch(() => finishGame());
  }
};

const tickHandler = () => {
  const currentTime = getStore().time;
  const { fullGameTime } = constants;
  const timelineRatio = currentTime / fullGameTime;

  dispatch(() => removeTime(1));
  timeline.innerHTML = `${currentTime} sec`;
  timeline.style.width = `${timelineRatio * 100}%`;

  if (currentTime === 0) {
    stopTimeline();
    setTimelineToStart();

    return null;
  }

  switch (true) {
    default:
      return null;

    case (timelineRatio <= 0.75 && timelineRatio >= 0.5):
      timeline.classList.remove('bg-success');
      timeline.classList.add('bg-info');
      break;

    case (timelineRatio <= 0.5 && timelineRatio >= 0.25):
      timeline.classList.remove('bg-info');
      timeline.classList.add('bg-warning');
      break;

    case (timelineRatio <= 0.25 && timelineRatio >= 0):
      timeline.classList.remove('bg-warning');
      timeline.classList.add('bg-danger');
      break;
  }
};

export const startTimeline = () => {
  const isGameStarted = getStore().gameStatus;

  switch (isGameStarted) {
    default:
      return null;

    case constants.GAME_PAUSED:
      dispatch(() => startGame(getStore().time));
      break;

    case constants.GAME_FINISHED:
      dispatch(() => startGame(constants.fullGameTime));
      break;
  }

  timeline.classList.add('progress-bar-animated');

  countdown = setInterval(tickHandler, 1000);
};
