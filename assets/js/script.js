(function() {
    const updateButton = document.getElementById('updateDetails');
    const favDialog = document.getElementById('pageFlutuante');
    const closeModal = document.getElementById('closeModal')


    updateButton.addEventListener('click', () => {
        favDialog.showModal();
    });

    closeModal.addEventListener('click', () => {
        favDialog.close();
    });

})();