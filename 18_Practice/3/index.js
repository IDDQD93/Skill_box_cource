const cats = ['../images/cat1.jpg', '../images/cat2.jpg', '../images/cat3.jpg']
const dogs = ['../images/dog1.jpg', '../images/dog2.jpg', '../images/dog3.jpg']

function progress(time, barId, timerId) {
    const bar = document.getElementById(barId)
    const barTimer = document.getElementById(timerId)

    let timer = 0
    barTimer.textContent = `${timer} с`;

    bar.style.transform = 'scaleX(1)'
    bar.style.transition = `transform ease-in ${time}s`
    
    const interval = setInterval(() => {
        timer++
        barTimer.textContent = `${timer} с`;

        if (timer >= time) {    
            clearInterval(interval);   
        }
    }, 1000);

}

function getCatsImages() {

    const delay = Math.round(Math.random() * (4 - 2) + 2)
    progress(delay, 'progress-bar1', 'progress-timer1')

    console.log(delay);
    return new Promise((resolve) => {
        setTimeout(() => resolve(cats), delay * 1000) 
    })
}

function getDogsImages() {
    const delay = Math.round(Math.random() * (4 - 2) + 2)
    progress(delay, 'progress-bar2', 'progress-timer2')

    console.log(delay);
    return new Promise((resolve) => {
        setTimeout(() => resolve(dogs), delay * 1000)
    })
}


function showPictures(picturesArr, galeryRow) {

    picturesArr.forEach(picSrc => {
        const galeryPic = document.createElement('img');
        galeryPic.src = picSrc

        galeryRow.append(galeryPic)
    });
}


window.onload = () => {
    const row1 = document.querySelector('.first-row');
    const row2 = document.querySelector('.second-row');
    row1.innerHTML = ''
    row2.innerHTML = ''

    getCatsImages()
    .then((arr) => {
        showPictures(arr, row1);
        getDogsImages()
        .then((arr) => {
        showPictures(arr, row2)})
    })

}