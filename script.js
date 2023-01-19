let h1 = document.getElementsByTagName('h1')[0];
let start = document.getElementsByClassName('start')[0];
let buttons = document.getElementsByClassName('buttons')[0]
let question = document.getElementById('question')
let questions = [
    {
        text: 'Какой из видов более уязвимый с примерным колличеством особей между 2154 и 3900?',
        answers: ['Тигр', 'Гепард', 'Леопард', 'Лев'],
    },
    {
        text: 'Как снежный барс использует свой хвост?',
        answers: ['Как шарф', 'Как пятую ногу', 'Как удочку', 'Как оружие'],
    },
    {
        text: 'Что из этого правда об Амурских тиграх',
        answers: ['Самые большие кошки', 'Они не едят мясо', 'На самом деле они леопарды', 'У них самый короткий хвост'],
    },
    {
        text: 'Каким зоологическим термином обозначают группу львов, вместе живущих и охотящихся?',
        answers: ['Стадо', 'Прайд', 'Стая', 'Семейство']
    },
    {
        text: ' Кто из диких кошек не способен рычать и мяукать, вследствие особого строения гортани?',
        answers: ['Снежный барс', 'Оцелот','Пума', 'Тигр']
    },
    {
        text: ' У кого из представителей кошачьего семейства самый густой и плотный мех?',
        answers: [' У манула','У рыси','У леопарда', 'снежный барс']
    },
    {
        text: 'В честь кого из крупных кошек получила название марка элитных автомобилей?',
        answers: [' Ягуара','Леопарда','Пумы', 'Тигра']
    },
    {
        text: 'Как называется помесь льва и тигра?',
        answers: ['+ Лигр','Ливр','Тибр', 'Овцебык']
    },
    {
        text: ' Какого дикого кота еще называют «хаус»?',
        answers: [' Камышового','Лесного','Барханного' ,'Пустынного']
    },
    {
        text: 'Кого из больших диких кошек древние египтяне приручали и использовали во время охоты?',
        answers: [' Гепардов','Тигров','Пантер', 'Леопард']
    },
];


let animals = ['dog', 'cat', 'parrot', 'turtle', 'frog', 'lion', 'shark', 'cow', 'snake', 'monkey'];
let score = 0;
let questionNumber=0;


h1.style.opacity='0'

start.style.opacity = '0'
h1.style.transition = '0.5s'
h1.style.transform = 'translateY(-' + (h1.getBoundingClientRect().top + h1.offsetHeight) + 'px)'
start.style.transition = '0.5s'


console.log(h1);

function getQuestion() {
    // JSON.stringify - превращает обьект в строку
    // JSON.parse - превращает строку в новый обьект
    let answers = JSON.parse(JSON.stringify(questions[questionNumber].answers))
    console.log(answers);

    for (let i = 3; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1))
        let vremenaya = answers[i];
        answers[i] = answers[randomNumber];
        answers[randomNumber] = vremenaya;

    }

    buttons.style.opacity='0';
    question.style.opacity='0'
    setTimeout(function () {
        for (let i = 0; i < 4; i++) {
            buttons.children[i].innerHTML = answers[i];
        }
        question.innerHTML = questions[questionNumber].text
        question.style.opacity = '1'
        buttons.style.opacity = '1'
    }, 500)
}

// for (let i = 0; i < 4; i++) {

//     buttons.children[i].onclick = function () {
//         console.log(buttons.children[i].innerHTML);

//     }
// }
for (let i = 0; i < 4; i++) {

    buttons.children[i].onclick = function () {
        console.log(buttons.children[i].innerHTML);
        console.log(questions[questionNumber].answers[0]);
        console.log(buttons.children[i].innerHTML);
        if (questions[questionNumber].answers[0] == buttons.children[i].innerHTML) {
            score = score + 1;
            console.log(score);
        }
        questionNumber=questionNumber+1;
        if(questionNumber==2){
            buttons.style.opacity='0'
            question.style.opacity='0'
   
            h1.innerHTML='Твой счёт: '+score;
            setTimeout(function(){
                h1.style.transition = '0.5s'
                question.style.display='none'
                buttons.style.display='none'
                h1.style.display='block'
                start.style.display='inline-block'

                setTimeout(function(){
                    begin();
                },500)
            },500)

        }
        else{
        getQuestion();

        }

    }
}

start.onclick = function () {
    console.log(123);
    start.style.opacity = '0'
    h1.style.opacity='0'
    questionNumber=0;
    // h1.getBoundingClientRect().top - растояние от верха h1 до верха страницы
    h1.style.transform = 'translateY(-' + (h1.getBoundingClientRect().top + h1.offsetHeight) + 'px)'
    setTimeout(function () {
        question.style.display = 'block'
        buttons.style.display = 'block'

        h1.style.display = 'none'
        start.style.display = 'none'
        getQuestion();

    }, 500)

    for (let i = animals.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let vremenaya = animals[i];
        animals[i] = animals[randomNumber];
        animals[randomNumber] = vremenaya;

    }
}

function begin() {
    h1.style.transform = 'rotate(-5deg)'
    start.style.opacity = '1'
    h1.style.opacity='1'


}

setTimeout(function () {
    begin();

}, 2000)

// Убрать теги чтобы появился аш2