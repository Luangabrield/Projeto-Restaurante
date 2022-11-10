//import { Person } from './person';

const porId = function (id){
    'use strict';
    return document.getElementById(id);
};


    const people = []; //sintaxe literal p/ criação de array

    //espaço antes da chave que abre o escopo
    //sem espaço entre a 'function' e o '()'
    porId('cadastro').onsubmit = function(e) {
        'use strict';
        e.preventDefault();

        const pessoa = new Person(
        porId('nome').value, 
        porId('email').value, 
        porId('telefone').value);

        people.push(pessoa); //array push em vez de atribuir direto os valores
        console.log(pessoa);
    };



    //comentario com espaçamento de linha correto
    const pessoaModelo = {
      //virgulas sempre na esquerda
      //aspas simples para string
      nome: 'Luan', 
      email: 'emailModelo@gmail.com',
      telefone: '042994553931'
    }; //criação de objeto literal

    console.log(pessoaModelo);


function dentro0(){
    'use strict';
    document.getElementsByTagName('input')[0].style.border = 'ridge';
} //utilização de chaves para blocos de mais de uma linha

function dentro1(){
    'use strict';
    document.getElementsByTagName('input')[1].style.border = 'ridge';
}

//ponto e virgula
//linha em branco entre blocos
function dentro2(){
    'use strict';
    document.getElementsByTagName('input')[2].style.border = 'ridge';
}

function fora0(){
    'use strict';
    document.getElementsByTagName('input')[0].style.border = 'groove';
}

function fora1(){
    'use strict';
    document.getElementsByTagName('input')[1].style.border = 'groove';
}

function fora2(){
    'use strict';
    document.getElementsByTagName('input')[2].style.border = 'groove';
}

 

function validaForm() {
    'use strict';
    console.log('salve');
    let valor = porId('nome').value;
    valor.trim();
    if(valor === '' || valor == null || valor.lenght < 3) {
        porId('aviso').innerHTML = ('por favor, digite um nome válido');
        valor.nome.focus();
        return false;
    } else {
        console.log('seu cu');
    }
}

porId('botao').addEventListener('click', validaForm);

let botaoCSS = document.getElementsByTagName('button')[0];
botaoCSS.addEventListener('mouseenter',() => {
    'use strict';
    botaoCSS.style.cursor = 'pointer';
}); 