"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dfe_validador_1 = require("../validador/dfe.validador");
var string_utils_1 = require("../utils/string.utils");
var chave_acesso_model_1 = require("../model/chave-acesso.model");
var DFEParser = (function () {
    function DFEParser() {
    }
    DFEParser.parseCh = function (chave) {
        var chaveAcesso = new chave_acesso_model_1.ChaveAcesso();
        chaveAcesso.chaveAcesso = string_utils_1.StringUtils.cleanUp(chave);
        chaveAcesso.cUF = chaveAcesso.chaveAcesso.substr(0, 2);
        chaveAcesso.dtEmissao = chaveAcesso.chaveAcesso.substr(2, 4);
        chaveAcesso.cnpjEmitente = chaveAcesso.chaveAcesso.substr(6, 14);
        chaveAcesso.modelo = chaveAcesso.chaveAcesso.substr(20, 2);
        chaveAcesso.serie = chaveAcesso.chaveAcesso.substr(22, 3);
        chaveAcesso.nNF = chaveAcesso.chaveAcesso.substr(25, 9);
        chaveAcesso.tpEmissao = chaveAcesso.chaveAcesso.substr(34, 1);
        chaveAcesso.cNF = chaveAcesso.chaveAcesso.substr(35, 8);
        chaveAcesso.cDV = chaveAcesso.chaveAcesso.substr(43, 1);
        try {
            dfe_validador_1.DFEValidador.validaChaveAcesso(chaveAcesso);
            return chaveAcesso;
        }
        catch (e) {
            throw e;
        }
    };
    return DFEParser;
}());
exports.DFEParser = DFEParser;
