var minhaVar = 'Minha variavel';

function minhaFun (x,y){
    return x+y;
}

//ES6 ou ES2015
let num = 2;
const PI = 3.14;

var numero = [1,2,3];
numero.map(function(valor){
return valor * 2;

});

numero.map(valor=> valor*2); //ES2015

class Matematica {
    soma(x,y){
        return x+y;
    }
}