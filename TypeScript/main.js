var minhaVar = 'Minha variavel';
function minhaFun(x, y) {
    return x + y;
}
//ES6 ou ES2015
var num = 2;
var PI = 3.14;
var numero = [1, 2, 3];
numero.map(function (valor) {
    return valor * 2;
});
numero.map(function (valor) { return valor * 2; }); //ES2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
