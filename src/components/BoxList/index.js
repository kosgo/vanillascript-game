import createBox from '../Box';

const field = document.getElementById('field');

const defineBoxType = () => {
  const randomNum = Math.random() * 100;
  let type;

  switch (true) {
    default:
      type = 'default';
      break;

    case (randomNum === 77):
      type = 'shuffle';
      break;

    case (randomNum > 90):
      type = 'add-point';
      break;

    case (randomNum < 90 && randomNum > 85):
      type = 'remove-point';
      break;

    case (randomNum < 85 && randomNum > 75):
      type = 'add-time';
      break;

    case (randomNum < 75 && randomNum > 70):
      type = 'remove-time';
      break;

    case (randomNum < 70):
      type = 'default';
      break;
  }

  return type;
};

const renderBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const type = defineBoxType();
    field.appendChild(createBox(type));
  }
};

export default renderBoxes;
