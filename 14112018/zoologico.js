"use strict";
exports.__esModule = true;
var zoologico = /** @class */ (function () {
    function zoologico(ender, listaani) {
        this.endereço = ender;
        this.listadeanimais = listaani;
    }
    zoologico.prototype.mostrarendereço = function () {
        return this.endereço;
    };
    zoologico.prototype.consultarlista = function () {
        return this.listadeanimais;
    };
    return zoologico;
}());
exports["default"] = zoologico;
