const porId = function (id){
    return document.getElementById(id)
}


    const people = [];

    porId('cadastro').onsubmit = function(e) {
        e.preventDefault()

        const pessoa = new Person(
        porId('nome').value, 
        porId('email').value, 
        porId('telefone').value)

        people.push(pessoa)
        console.log(pessoa)
    }

    const pessoaModelo = {
        nome: 'Luan',
        email: 'emailModelo@gmail.com',
        telefone: '042994553931'
    }

    console.log(pessoaModelo)


function dentro0(){
    document.getElementsByTagName('input')[0].style.border = 'ridge';
}
function dentro1(){
    document.getElementsByTagName('input')[1].style.border = 'ridge';
}
function dentro2(){
    document.getElementsByTagName('input')[2].style.border = 'ridge';
}

function fora0(){
    document.getElementsByTagName('input')[0].style.border = 'groove';
}
function fora1(){
    document.getElementsByTagName('input')[1].style.border = 'groove';
}
function fora2(){
    document.getElementsByTagName('input')[2].style.border = 'groove';
}