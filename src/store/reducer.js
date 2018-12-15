import * as types from './types';
import * as gameStatuses from '../constants';

const initialState = {
  points: 0,
  gameStatus: gameStatuses.GAME_FINISHED,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;

    case types.START_GAME:
      return {
        ...state,
        time: payload,
        gameStatus: gameStatuses.GAME_PLAYING,
      };

    case types.PAUSE_GAME:
      return {
        ...state,
        gameStatus: gameStatuses.GAME_PAUSED,
      };

    case types.FINISH_GAME:
      return {
        ...state,
        gameStatus: gameStatuses.GAME_FINISHED,
      };

    case types.ADD_TIME:
      return {
        ...state,
        time: state.time + payload,
      };

    case types.REMOVE_TIME:
      return {
        ...state,
        time: state.time - payload,
      };

    case types.ADD_POINT:
      return {
        ...state,
        points: state.points + payload,
      };

    case types.REMOVE_POINT:
      return {
        ...state,
        points: state.points - payload,
      };
  }
};

export default reducer;
