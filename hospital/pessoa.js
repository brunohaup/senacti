"use strict";
exports.__esModule = true;
var pessoa = /** @class */ (function () {
    function pessoa(login, autenticar, deslogar) {
        this.login = login;
        this.autenticar = autenticar;
        this.deslogar = deslogar;
    }
    pessoa.prototype.logar = function () {
        if (this.login == 'teste')
            console.log("logado com sucesso");
        else {
            console.log("digite o login corretamente");
        }
    };
    return pessoa;
}());
exports.pessoa = pessoa;
