let h1  = document.getElementsByTagName('h1')[0];
h1.style.transform = 'translateY(-'+(h1.getBoundingClientRect().top+h1.offsetHeight)+'px)'

console.log(h1);

function begin(){
    h1.style.transform = 'rotate(-5deg)'
    
}

setTimeout(function(){
    begin();

},2000)

// Сделать появление кнопки с помощью opacity
// Настроить фон