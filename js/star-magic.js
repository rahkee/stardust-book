const mainContainer = document.querySelector('#naledi');

window.addEventListener('load', (e) => {
    setTimeout(function () {
        mainContainer.classList.toggle('journey-begins');
    }, 1000);
});
