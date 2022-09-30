const porId = function (id){
    return document.getElementById(id)
}

function getId(){
    return 'el';
}

document.onload = alert('bem vindo ao nosso site!')
let apelido = prompt('digite o apelido que deseja ser tratado aqui: ')

setTimeout(function () {
    confirm(`vamos chamar você de ${apelido} :)`);
    alert(`prazer em te conhecer ${apelido}!! Fique a vontade para apreciar nosso menu`);
}, 200)    
    
let botaoCSS = document.querySelector('#prox')

botaoCSS.addEventListener('mouseenter',() => {
    botaoCSS.style.cursor = 'pointer';
}); 

(function () {
    botaoCSS.addEventListener('mouseenter', emCima)
})();

document.getElementsByTagName('button')[0].addEventListener('mouseout', sair)


function emCima(){
    document.getElementsByName('botao')[0].style.background = 'red'; 
}

function sair(){
    botaoCSS.style.background = 'rgb(71, 5, 5)';
}

setInterval(function() {
    setTimeout (function(){
        porId(getId()).style.color = 'red'
    }, 1000);
    setTimeout (function(){
        porId(getId()).style.color = 'green'
    }, 500)
}, 2000);