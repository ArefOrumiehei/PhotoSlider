const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')
const bottomEl = document.querySelector('.bottom')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')

let slideNumber = 1;

// make position show
for (let i = 0; i < images.length; i++) {
    const button = document.createElement('div')
    button.classList.add('button')
    bottomEl.appendChild(button)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'

const removBg = () => {
    buttons.forEach(item => {
        item.style.backgroundColor = 'transparent'
    })
}

buttons.forEach((item , index) => {
    item.addEventListener('click' , () => {
        removBg()
        slider.style.transform = `translateX(-${index * 800}px)`;  
        slideNumber = index + 1
        item.style.backgroundColor ='white'
    })
});


// make arrows event
arrowLeft.addEventListener('click', () => {
    if (slideNumber > 1) {
    slideNumber--;
    } else {
    slideNumber = images.length;
    }
    slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
    removBg()
    buttons[slideNumber - 1].style.backgroundColor ='white'
});

arrowRight.addEventListener('click', () => {
    if (slideNumber < images.length) {
    slideNumber++;
    } else {
    slideNumber = 1;
    }
    slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
    removBg()
    buttons[slideNumber - 1].style.backgroundColor ='white'
});


