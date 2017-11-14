"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoOperacao;
(function (TipoOperacao) {
    TipoOperacao[TipoOperacao["ENTRADA"] = 0] = "ENTRADA";
    TipoOperacao[TipoOperacao["SAIDA"] = 1] = "SAIDA";
})(TipoOperacao = exports.TipoOperacao || (exports.TipoOperacao = {}));
(function (TipoOperacao) {
    function toString(tp) {
        switch (tp) {
            case TipoOperacao.ENTRADA:
                return "Entrada";
            case TipoOperacao.SAIDA:
                return "Saída";
        }
    }
    TipoOperacao.toString = toString;
})(TipoOperacao = exports.TipoOperacao || (exports.TipoOperacao = {}));
