var apelido = prompt('digite o apelido que deseja ser tratado aqui: ')

setTimeout(function () {
    confirm(`vamos chamar você de ${apelido} :)`);
    alert(`prazer em te conhecer ${apelido}!! Fique a vontade para apreciar nosso menu`);
}, 2000)    
    
var a = document.querySelector('#prox')
a.addEventListener('mouseenter',() => {
    a.style.cursor = 'pointer';
}); 

a.addEventListener('mouseenter', emCima)
a.addEventListener('mouseout', sair)

function emCima(){
    a.style.background = 'red'; 
}

function sair(){
    a.style.background = 'rgb(71, 5, 5)';
}
