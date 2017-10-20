"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelo_dfe_enum_1 = require("./modelo-dfe.enum");
var tipo_Emissao_enum_1 = require("./tipo-Emissao.enum");
var codigo_uf_enum_1 = require("./codigo-uf.enum");
/**
 * Classe que representa uma chave de acesso de um Documento Fiscal eletrônico.
 * @author luizvnasc
 * @since 18/10/2017
 */
var ChaveAcesso = (function () {
    function ChaveAcesso() {
    }
    Object.defineProperty(ChaveAcesso.prototype, "chaveFormatada", {
        get: function () {
            var chaveFormatada = '';
            for (var i = 0; i < 11; i++) {
                if (i < 10)
                    chaveFormatada += this.chaveAcesso.substr(4 * i, 4) + '.';
                else
                    chaveFormatada += this.chaveAcesso.substr(4 * i, 4);
            }
            return chaveFormatada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChaveAcesso.prototype, "dtEmissaoFormatada", {
        get: function () {
            return this.dtEmissao.substr(2, 2) + '/' + this.dtEmissao.substr(0, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChaveAcesso.prototype, "cnpjFormatado", {
        get: function () {
            return this.cnpjEmitente.substr(0, 2) + '.' + this.cnpjEmitente.substr(2, 3) + '.' + this.cnpjEmitente.substr(5, 3) + '/' + this.cnpjEmitente.substr(8, 4) + '-' + this.cnpjEmitente.substr(12, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChaveAcesso.prototype, "UF", {
        get: function () {
            console.log(+this.cUF);
            return codigo_uf_enum_1.CUF[+this.cUF];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChaveAcesso.prototype, "tipoEmissaoFormatado", {
        get: function () {
            return tipo_Emissao_enum_1.TipoEmissao.toString(+this.tpEmissao);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChaveAcesso.prototype, "modeloFormatado", {
        get: function () {
            return modelo_dfe_enum_1.ModeloDFE[+this.modelo];
        },
        enumerable: true,
        configurable: true
    });
    return ChaveAcesso;
}());
exports.ChaveAcesso = ChaveAcesso;
