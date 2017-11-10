"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_model_1 = require("../model/endereco.model");
var modelo_dfe_enum_1 = require("../model/modelo-dfe.enum");
var dfe_model_1 = require("../model/dfe.model");
var dfe_validador_1 = require("../validador/dfe.validador");
var string_utils_1 = require("../utils/string.utils");
var chave_acesso_model_1 = require("../model/chave-acesso.model");
var pessoa_model_1 = require("../model/pessoa.model");
var _ = require("lodash");
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
    DFEParser.parseDFE = function (data) {
        try {
            var dfe = new dfe_model_1.DFE();
            dfe.id = data.id;
            dfe.indSituacao = data.indSituacao;
            dfe.nNF = data.nNF;
            dfe.dhEmi = data.dhEmi;
            dfe.dhSaiEnt = data.dhSaiEnt;
            dfe.tpNF = data.tpNF;
            dfe.tpEmis = data.tpEmis;
            dfe.tpAmb = data.tpAmb;
            var chave = this.parseCh(data.id);
            dfe.modelo = +chave.modelo;
            switch (dfe.modelo) {
                case modelo_dfe_enum_1.ModeloDFE.NFe:
                    return this.parseNFE(dfe, data);
                default:
                    return dfe; //modelo não implementado
            }
        }
        catch (e) {
            throw e;
        }
    };
    DFEParser.parseNFE = function (dfe, data) {
        var nfe = dfe;
        nfe.finNFe = data.finNFe;
        var emitente = new pessoa_model_1.Pessoa();
        emitente.razaoSocial = data.nomeEmit;
        emitente.endereco = new endereco_model_1.Endereco();
        emitente.endereco.lgr = data.lgrEmit;
        emitente.endereco.bairro = data.bairroEmit;
        emitente.endereco.numero = data.nroEmit;
        emitente.endereco.cidade = data.muniEmit;
        emitente.endereco.uf = data.ufEmit;
        if (_.isNil(data.cnpjEmit) || data.cnpjEmit == '') {
            emitente.cpfCnpj = data.cpfEmit;
        }
        else {
            emitente.cpfCnpj = data.cnpjEmit;
        }
        nfe.emitente = emitente;
        var destinatario = new pessoa_model_1.Pessoa();
        destinatario.razaoSocial = data.nomeDest;
        destinatario.endereco = new endereco_model_1.Endereco();
        destinatario.endereco.lgr = data.lgrDest;
        destinatario.endereco.bairro = data.bairroDest;
        destinatario.endereco.numero = data.nroDest;
        destinatario.endereco.cidade = data.muniDest;
        destinatario.endereco.uf = data.ufDest;
        if (_.isNil(data.cnpjDest) || data.cnpjDest == '') {
            emitente.cpfCnpj = data.cpfDest;
        }
        else {
            emitente.cpfCnpj = data.cnpjDest;
        }
        nfe.destinatario = destinatario;
        nfe.itens = data.itens;
        nfe.vBCTot = data.vBCTot;
        nfe.vICMSTot = data.vICMSTot;
        nfe.vProdTot = data.vProdTot;
        nfe.vNFTot = data.vNFTot;
        return nfe;
    };
    return DFEParser;
}());
exports.DFEParser = DFEParser;
