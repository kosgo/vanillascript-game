const showModalButton = document.getElementById('showModal');
const closeModalButton = document.getElementById('closeModal');

const toggleModal = (action) => {
    const modal = document.getElementById('modal');

    action === 'open'
        ?  modal.classList.remove('modal--hidden')
        :  modal.classList.add('modal--hidden');
};

const setModalListeners = () => {
    showModalButton.addEventListener('click', () => toggleModal('open'));
    closeModalButton.addEventListener('click', () => toggleModal('close'));
};

export default setModalListeners;
 