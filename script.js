let enemyScore = 0
let myScore = 0


const myCircleBtn = document.getElementById('myCircle')
const spokBtn = document.getElementById('spok')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const rockBtn = document.getElementById('rock')
const lizardBtn = document.getElementById('lizard')


spokBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/spok.png')"
    myCircleBtn.style.backgroundSize = "contain";
});

paperBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/paper.png')"
    myCircleBtn.style.backgroundSize = "contain";
});

scissorsBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/scissors.png')"
    myCircleBtn.style.backgroundSize = "contain";
});

rockBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/rock.png')"
    myCircleBtn.style.backgroundSize = "contain";
});

lizardBtn.addEventListener('click', () => {
    myCircleBtn.style.backgroundImage = "url('images/lizard.png')"
    myCircleBtn.style.backgroundSize = "contain";
});