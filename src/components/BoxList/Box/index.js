const createBox = (type) => {
  const boxElement = document.createElement('div');
  boxElement.classList.add('box');

  switch (type) {
    default:
      boxElement.classList.add('box--default');
      return boxElement;

    case 'add-point':
      boxElement.classList.add('box--add-point');
      return boxElement;

    case 'remove-point':
      boxElement.classList.add('box--remove-point');
      return boxElement;

    case 'add-time':
      boxElement.classList.add('box--add-time');
      return boxElement;

    case 'remove-time':
      boxElement.classList.add('box--remove-time');
      return boxElement;

    case 'shuffle':
      boxElement.classList.add('box--shuffle');
      return boxElement;
  }
};

export default createBox;
