let h1  = document.getElementsByTagName('h1')[0];
let start = document.getElementsByClassName('start')[0];
let buttons = document.getElementsByClassName('buttons')[0]
let question  = document.getElementById('question')
let counter = 0;
let questions = [
    {
        text: 'Какой из видов более уязвимый с примерным колличеством особей между 2154 и 3900?',
        answers: ['Тигр', 'Гепард', 'Леопард', 'Лев'],
    }
];


start.style.opacity = '0'
h1.style.transition='0.5s'
h1.style.transform = 'translateY(-'+(h1.getBoundingClientRect().top+h1.offsetHeight)+'px)'
start.style.transition='0.5s'


console.log(h1);

function getQuestion(){
    for(let i= 0; i<4; i++){
        buttons.children[i].innerHTML=questions[counter].answers[i];
    }
    setTimeout(function(){
    
        question.style.opacity='1'
        buttons.style.opacity='1'
    },500)
}


start.onclick = function(){
    console.log(123);
    start.style.opacity = '0'

    h1.style.transform = 'translateY(-'+(h1.getBoundingClientRect().top+h1.offsetHeight)+'px)'
    setTimeout(function(){
        question.style.display='block'
        buttons.style.display='block'

        h1.style.display='none'
        start.style.display='none'
        getQuestion();
        
    },500)
}

function begin(){
    h1.style.transform = 'rotate(-5deg)'
    start.style.opacity = '1'
    
    
}

setTimeout(function(){
    begin();

},2000)

// создать массив с десятью элементами 
// написать цикл который перемешивает массив