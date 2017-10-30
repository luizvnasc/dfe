"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_model_1 = require("./endereco.model");
var Pessoa = (function () {
    function Pessoa() {
        this.endereco = new endereco_model_1.Endereco();
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
