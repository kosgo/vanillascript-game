import reducer from './reducer';

let store;
const defaultAction = {
  type: null,
  payload: null,
};

export const dispatch = (callback) => {
  const action = callback();

  store = reducer(store, action);
};

export const getStore = () => reducer(store, defaultAction);
