import createBox from './Box';

import { getStore, dispatch } from '../../store';
import {
  addTime,
  removeTime,
  addPoint,
  removePoint,
} from '../../store/actions';

const field = document.getElementById('field');

const getRandomInt = num => Math.round(Math.random() * num);

const defineBoxType = (byClick) => {
  const randomNum = Math.random() * 100;
  const rates = {
    shuffle: 77,
    addPoint: byClick ? 60 : 90,
    removePoint: byClick ? 50 : 85,
    addTime: byClick ? 10 : 75,
    removeTime: byClick ? 10 : 70,
  };
  let type;

  switch (true) {
    default:
      type = 'default';
      break;

    case (randomNum === rates.shuffle):
      type = 'shuffle';
      break;

    case (randomNum > rates.addPoint):
      type = 'add-point';
      break;

    case (randomNum < rates.addPoint && randomNum > rates.removePoint):
      type = 'remove-point';
      break;

    case (randomNum < rates.removePoint && randomNum > rates.addTime):
      type = 'add-time';
      break;

    case (randomNum < rates.addTime && randomNum > rates.removeTime):
      type = 'remove-time';
      break;

    case (randomNum < rates.removeTime):
      type = 'default';
      break;
  }

  return type;
};

const addBoxes = () => {
  const defaultBoxes = [...field.children].filter(el => el.classList.contains('box--default'));
  const boxesAmount = getRandomInt(2);

  for (let i = 0; i < boxesAmount; i += 1) {
    const newBox = createBox(defineBoxType('click'));
    const indexToReplace = getRandomInt(defaultBoxes.length - 1);

    defaultBoxes[indexToReplace].replaceWith(newBox);
  }
};

const handleBoxClick = (event) => {
  const { target } = event;
  const { gameStatus } = getStore();
  const defaultBox = createBox();

  if (target === field || target.classList.contains('box--default')) {
    return null;
  }

  if (gameStatus === 'GAME_PLAYING') {
    field.replaceChild(defaultBox, target);
    addBoxes();
  }

  switch (true) {
    default:
      return null;

    case target.classList.contains('box--add-point'):
      return dispatch(() => addPoint(Math.ceil(Math.random() * 3)));

    case target.classList.contains('box--remove-point'):
      return dispatch(() => removePoint(Math.ceil(Math.random() * 3)));

    case target.classList.contains('box--add-time'):
      return dispatch(() => addTime(Math.ceil(Math.random() * 3)));

    case target.classList.contains('box--remove-time'):
      return dispatch(() => removeTime(Math.ceil(Math.random() * 3)));
  }
};

export const renderBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const type = defineBoxType();
    field.appendChild(createBox(type));
  }

  field.addEventListener('click', handleBoxClick);
};

export const removeBoxes = () => {
  const { children } = field;
  [...children].forEach(el => el.remove());

  field.removeEventListener('click', handleBoxClick);
};
