import * as types from './types';

export const startGame = payload => ({
  type: types.START_GAME,
  payload,
});

export const pauseGame = () => ({
  type: types.PAUSE_GAME,
});

export const finishGame = () => ({
  type: types.FINISH_GAME,
});

export const addTime = payload => ({
  type: types.ADD_TIME,
  payload,
});

export const removeTime = payload => ({
  type: types.REMOVE_TIME,
  payload,
});

export const addPoints = payload => ({
  type: types.ADD_POINT,
  payload,
});

export const removePoints = payload => ({
  type: types.REMOVE_POINT,
  payload,
});
