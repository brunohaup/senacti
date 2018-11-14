"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var medico = /** @class */ (function (_super) {
    __extends(medico, _super);
    function medico(login, autentic, deslogar) {
        return _super.call(this, login, autentic, deslogar) || this;
    }
    medico.prototype.logar = function () {
        if (this.login == 'teste')
            console.log("Medico logado com sucesso");
        else {
            console.log("digite o login corretamente");
        }
    };
    medico.prototype.autentica = function () {
        if (this.autentic == 'teste')
            console.log("autenticado com sucesso");
        else {
            console.log("não autenticado");
        }
    };
    return medico;
}(pessoa_1.pessoa));
exports.medico = medico;
