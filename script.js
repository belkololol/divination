function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    }
    
  
var cardTaro = [{
    id: 'card-0',
    image: 'img/taro.png',
}, {
    id: 'card-1',
    image: 'img/taro.png',
}, {
    id: 'card-2',
    image: 'img/taro.png',
}
];


const cardConteiner = document.querySelector('.taro');

function createCards() {
    cardConteiner.innerHTML = '';
    
    const divCount = cardTaro.length;
    const margin = 30;
    
    const containerWidth = cardConteiner.clientWidth;
    const divWidth = (containerWidth - (margin * (divCount - 1))) / divCount;
    const divHeight = cardConteiner.clientHeight;
    
    cardTaro.forEach((card, index) => {
    const newImg = document.createElement('img');
    newImg.id = card.id;
    newImg.classList.add('taro-card');
    newImg.setAttribute('src', cardTaro[index].image)
    newImg.style.width = `${divWidth}px`;
    newImg.id = card.id;
    
    newImg.style.left = `${index * divWidth + index * margin}px`;
    
    cardConteiner.appendChild(newImg);
    });
    }

createCards();


    
    function shuffleCards() {
    shuffle(cardTaro);
    
    const divCount = cardTaro.length;
    const margin = 30;
    
    const containerWidth = cardConteiner.clientWidth;
    const divWidth = (containerWidth - (margin * (divCount - 1))) / divCount;
    
    cardTaro.forEach((card, index) => {
    const cardImg = cardConteiner.querySelector(`#${card.id}`);
    cardImg.style.left = `${index * divWidth + index * margin}px`;
    });
    }
    
   
    document.addEventListener('DOMContentLoaded',  () => {
    const intervalCount = 10;
    const intervalValue = 250;
    const intervalStop = intervalValue * intervalCount;
    
    const intervalId = setInterval(shuffleCards, intervalValue);
    
    setTimeout(() => {
    clearInterval(intervalId);
    }, intervalStop);
    });
    
    
    let resizeTimerId = null;
    window.addEventListener('resize', () => {
    clearTimeout(resizeTimerId);
    resizeTimerId = setTimeout(createCards, 500);
    });