const porId = function (id){
    return document.getElementById(id)
}

(function (){
    const persons = [];

    porId('cadastro').onsubmit = function(e) {
        e.preventDefault();

        const pessoa = new Person(porId('nome').value, porId('email').value, porId('telefone').value);

        persons.push(pessoa);
        
    };
})();

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