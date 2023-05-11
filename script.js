let enemyScore = 0
let myScore = 0



const myCircleBtn = document.getElementById('myCircle')
const enemyCircleBtn = document.getElementById('enemyCircle')
let myScoreCount = document.getElementById('myScore')
let enemyScoreCount = document.getElementById('enemyScore')
let winOrLoseTag = document.getElementById('winOrLose')
let allPictures = [
    "url('images/spok.png')",
    "url('images/paper.png')",
    "url('images/scissors.png')",
    "url('images/rock.png')",
    "url('images/lizard.png')"
]
const spokBtn = document.getElementById('spok')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const rockBtn = document.getElementById('rock')
const lizardBtn = document.getElementById('lizard')

const leoTag = document.getElementById("leo");
const pennyTag = document.getElementById("penny");
const radzheshTag = document.getElementById("radzhesh");
const sheldonTag = document.getElementById("sheldon");
const sheldonSecondTag = document.getElementById("sheldonSecond");

const hover = document.getElementById('hover')
const beep = document.getElementById('beep')

spokBtn.addEventListener('mouseover', playHover)
paperBtn.addEventListener('mouseover', playHover)
scissorsBtn.addEventListener('mouseover', playHover)
rockBtn.addEventListener('mouseover', playHover)
lizardBtn.addEventListener('mouseover', playHover)

spokBtn.addEventListener('click', playBeep)
paperBtn.addEventListener('click', playBeep)
scissorsBtn.addEventListener('click', playBeep)
rockBtn.addEventListener('click', playBeep)
lizardBtn.addEventListener('click', playBeep)

function playHover() {
    hover.play()
}
function playBeep() {
    beep.play()
}



spokBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/spok.png')"
    myCircleBtn.style.backgroundSize = "contain";
    let randomNumber = Math.floor(Math.random() * 5)
    let randomPicture = allPictures[randomNumber]
    enemyCircleBtn.style.backgroundImage = randomPicture
    enemyCircleBtn.style.backgroundSize = "contain";
    if (randomPicture === "url('images/spok.png')") {
        winOrLoseTag.innerHTML = 'It\'s A Draw!'
    }
    else if (randomPicture === "url('images/rock.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
        leoTag.removeAttribute('hidden');
        setTimeout(() => {
            leoTag.setAttribute('hidden', true);
        }, 400);
    }
    else if (randomPicture === "url('images/scissors.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore

    }
    else if (randomPicture === "url('images/paper.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }

    else if (randomPicture === "url('images/lizard.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }
});

paperBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/paper.png')"
    myCircleBtn.style.backgroundSize = "contain";
    let randomNumber = Math.floor(Math.random() * 5)
    let randomPicture = allPictures[randomNumber]
    enemyCircleBtn.style.backgroundImage = randomPicture
    enemyCircleBtn.style.backgroundSize = "contain";
    if (randomPicture === "url('images/paper.png')") {
        winOrLoseTag.innerHTML = 'It\'s A Draw!'
    }
    else if (randomPicture === "url('images/spok.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/rock.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
        pennyTag.removeAttribute('hidden');
        setTimeout(() => {
            pennyTag.setAttribute('hidden', true);
        }, 400);
    }
    else if (randomPicture === "url('images/scissors.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }

    else if (randomPicture === "url('images/lizard.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }
});

scissorsBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/scissors.png')"
    myCircleBtn.style.backgroundSize = "contain";
    let randomNumber = Math.floor(Math.random() * 5)
    let randomPicture = allPictures[randomNumber]
    enemyCircleBtn.style.backgroundImage = randomPicture
    enemyCircleBtn.style.backgroundSize = "contain";
    if (randomPicture === "url('images/scissors.png')") {
        winOrLoseTag.innerHTML = 'It\'s A Draw!'
    }
    else if (randomPicture === "url('images/paper.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/lizard.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/spok.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
        sheldonTag.removeAttribute('hidden');
        setTimeout(() => {
            sheldonTag.setAttribute('hidden', true);
        }, 400);
    }

    else if (randomPicture === "url('images/rock.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }
});

rockBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/rock.png')"
    myCircleBtn.style.backgroundSize = "contain";
    let randomNumber = Math.floor(Math.random() * 5)
    let randomPicture = allPictures[randomNumber]
    enemyCircleBtn.style.backgroundImage = randomPicture
    enemyCircleBtn.style.backgroundSize = "contain";
    if (randomPicture === "url('images/rock.png')") {
        winOrLoseTag.innerHTML = 'It\'s A Draw!'
    }
    else if (randomPicture === "url('images/scissors.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/lizard.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/paper.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
        radzheshTag.removeAttribute('hidden');
        setTimeout(() => {
            radzheshTag.setAttribute('hidden', true);
        }, 400);
    }

    else if (randomPicture === "url('images/spok.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }
});

lizardBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/lizard.png')"
    myCircleBtn.style.backgroundSize = "contain";
    let randomNumber = Math.floor(Math.random() * 5)
    let randomPicture = allPictures[randomNumber]
    enemyCircleBtn.style.backgroundImage = randomPicture
    enemyCircleBtn.style.backgroundSize = "contain";
    if (randomPicture === "url('images/lizard.png')") {
        winOrLoseTag.innerHTML = 'It\'s A Draw!'
    }
    else if (randomPicture === "url('images/paper.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/spok.png')") {
        winOrLoseTag.innerHTML = 'You Win!'
        myScore++
        myScoreCount.innerHTML = myScore
    }
    else if (randomPicture === "url('images/scissors.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
        sheldonSecondTag.removeAttribute('hidden');
        setTimeout(() => {
            sheldonSecondTag.setAttribute('hidden', true);
        }, 400);
    }

    else if (randomPicture === "url('images/rock.png')") {
        winOrLoseTag.innerHTML = 'You Lose!'
        enemyScore++
        enemyScoreCount.innerHTML = enemyScore
    }
});