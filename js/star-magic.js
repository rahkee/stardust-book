window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        mainContainer.classList.remove('journey-begins');
    } else {
        mainContainer.classList.add('journey-begins');
    }
});

const mainContainer = document.querySelector('#naledi');

const homeCallToAction = document.querySelector('#begin-the-journey');
homeCallToAction.addEventListener('click', () => {
    mainContainer.classList.add('journey-begins');
});