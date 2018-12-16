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

export const addPoint = payload => ({
  type: types.ADD_POINT,
  payload,
});

export const removePoint = payload => ({
  type: types.REMOVE_POINT,
  payload,
});
