document.querySelectorAll('.drum').forEach(element => {
    element.addEventListener('click', () => {
        eventManager(element.innerText);        
    });
})

document.addEventListener('keypress', (e) => {
    eventManager(e.key);
})

function eventManager(text) {
    const activeButton = document.querySelector('.'+text);
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 300);
    switch (text) {
        case 'w':
            new Audio('sounds/crash.mp3').play()
            break;
        case 'a':
            new Audio('sounds/kick-bass.mp3').play()
            break;
        case 's':
            new Audio('sounds/snare.mp3').play()
            break;
        case 'd':
            new Audio('sounds/tom-1.mp3').play()
            break;
        case 'j':
            new Audio('sounds/tom-2.mp3').play()
            break;
        case 'k':
            new Audio('sounds/tom-3.mp3').play()
            break;
        case 'l':
            new Audio('sounds/tom-4.mp3').play()
            break;
        default:
            console.log(text);
            break;
    }
    
}
