const mainContainer = document.querySelector('#naledi');
const overlay = document.querySelector('.overlay');

window.addEventListener('load', (e) => {
    overlay.classList.add('hide');

    setTimeout(function () {
        mainContainer.classList.toggle('journey-begins');
    }, 1000);
});
