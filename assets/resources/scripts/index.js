const porId = function (id){
    'use strict';
    return document.getElementById(id);
};

function getId(){
    'use strict';
    return 'el';
}

window.onload = alert('bem vindo ao nosso site!')
let apelido = prompt('digite o apelido que deseja ser tratado aqui: ');


confirm(`vamos chamar você de ${apelido} :)`);
      
    
let botaoCSS = document.querySelector('#prox');

botaoCSS.addEventListener('mouseenter',() => {
    'use strict';
    botaoCSS.style.cursor = 'pointer';
}); 

(function () {
    'use strict';
    botaoCSS.addEventListener('mouseenter', emCima);
})();

document.getElementsByTagName('button')[0].addEventListener('mouseout', sair);

function emCima(){
    'use strict';
    document.getElementsByName('botao')[0].style.background = 'red'; 
}

function sair(){
    'use strict';
    botaoCSS.style.background = 'rgb(71, 5, 5)';
}

setInterval(function() {
    'use strict';
    setTimeout (function(){
        porId(getId()).style.color = 'red';
    }, 1000);
    setTimeout (function(){
        porId(getId()).style.color = 'green';
    }, 500);
}, 2000);