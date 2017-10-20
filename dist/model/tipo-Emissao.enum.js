"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoEmissao;
(function (TipoEmissao) {
    TipoEmissao[TipoEmissao["NORMAL"] = 1] = "NORMAL";
    TipoEmissao[TipoEmissao["CONTINGENCIA_FSIA"] = 2] = "CONTINGENCIA_FSIA";
    TipoEmissao[TipoEmissao["CONTINGENCIA_SCAN"] = 3] = "CONTINGENCIA_SCAN";
    TipoEmissao[TipoEmissao["CONTINGENCIA_DPEC"] = 4] = "CONTINGENCIA_DPEC";
    TipoEmissao[TipoEmissao["CONTINGENCIA_FSDA"] = 5] = "CONTINGENCIA_FSDA";
    TipoEmissao[TipoEmissao["CONTINGENCIA_SVCAN"] = 6] = "CONTINGENCIA_SVCAN";
    TipoEmissao[TipoEmissao["CONTINGENCIA_SVCRS"] = 7] = "CONTINGENCIA_SVCRS";
    TipoEmissao[TipoEmissao["CONTINGENCIA_OFFLINE"] = 9] = "CONTINGENCIA_OFFLINE";
})(TipoEmissao = exports.TipoEmissao || (exports.TipoEmissao = {}));
(function (TipoEmissao) {
    function toString(value) {
        switch (value) {
            case TipoEmissao.NORMAL:
                return 'Normal';
            case TipoEmissao.CONTINGENCIA_FSIA:
                return 'Contingência FS-IA';
            case TipoEmissao.CONTINGENCIA_SCAN:
                return 'Contingência SCAN';
            case TipoEmissao.CONTINGENCIA_DPEC:
                return 'Contingência DPEC';
            case TipoEmissao.CONTINGENCIA_FSDA:
                return 'Contingência FS-DA';
            case TipoEmissao.CONTINGENCIA_SVCAN:
                return 'Contingência SVC-AN';
            case TipoEmissao.CONTINGENCIA_SVCRS:
                return 'Contingência SVC-RS';
            case TipoEmissao.CONTINGENCIA_OFFLINE:
                return 'Contingência Offline';
        }
    }
    TipoEmissao.toString = toString;
})(TipoEmissao = exports.TipoEmissao || (exports.TipoEmissao = {}));
