import './index.scss';

import { getStore, dispatch } from './store';

import setModalListeners from './components/Modal';
import { startTimeline, stopTimeline, setTimelineToStart } from './components/Timeline';

const init = () => {
  const startButton = document.getElementById('start');
  const pauseButton = document.getElementById('pause');
  const closeButton = document.getElementById('closeModal');

  setModalListeners();
  setTimelineToStart();

  startButton.addEventListener('click', () => {
    startButton.innerHTML = 'START';

    startTimeline();
  });

  pauseButton.addEventListener('click', () => {
    if (getStore().gameStatus === 'GAME_PLAYING') {
      startButton.innerHTML = 'CONTINUE';
    }
    stopTimeline('pause');
  });

  closeButton.addEventListener('click', () => {
    startButton.innerHTML = 'START';
    stopTimeline();
    setTimelineToStart();
  });
};

init();
