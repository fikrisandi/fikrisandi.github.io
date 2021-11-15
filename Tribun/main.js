var searchIcon = document.querySelector('.fa-search');
var closeIcon = document.querySelector('.fa-times');
var search = document.getElementById('search');
searchIcon.onclick = () =>{
    search.classList.add('expand');
}
closeIcon.onclick = () =>{
    search.classList.remove('expand');
}
var button = document.querySelector('button');
var menu = document.querySelector('.menu');
button.onclick = ()=>{
    menu.classList.toggle('expand-mobile');
    button.classList.toggle('expand-icon');
}

const textDisplay = document.getElementById('text')
const phrases = ['Lampaui Batas Kalian', 'Bermekarlah Tanpa Sekat']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false
function loop() { isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }
        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i === phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}
loop()