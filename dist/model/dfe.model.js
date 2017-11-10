"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe que representa um documento fiscal eletrônico.
 * @author luizvnasc
 * @since 30/10/2017
 */
var DFE = (function () {
    function DFE() {
    }
    Object.defineProperty(DFE.prototype, "chaveAcesso", {
        get: function () {
            var chaveFormatada = '';
            for (var i = 0; i < 11; i++) {
                if (i < 10)
                    chaveFormatada += this.id.substr(4 * i, 4) + '.';
                else
                    chaveFormatada += this
                        .id
                        .substr(4 * i, 4);
            }
            return chaveFormatada;
        },
        enumerable: true,
        configurable: true
    });
    return DFE;
}());
exports.DFE = DFE;
