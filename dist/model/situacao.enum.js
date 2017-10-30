"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Situacao;
(function (Situacao) {
    Situacao[Situacao["INVALIDO"] = 0] = "INVALIDO";
    Situacao[Situacao["NAO_ENCONTRADO"] = 1] = "NAO_ENCONTRADO";
    Situacao[Situacao["ERRO_PROCESSAMENTO"] = 2] = "ERRO_PROCESSAMENTO";
    Situacao[Situacao["MODELO_INDISPONIVEL"] = 3] = "MODELO_INDISPONIVEL";
    Situacao[Situacao["AUTORIZADO"] = 4] = "AUTORIZADO";
    Situacao[Situacao["CANCELADO"] = 5] = "CANCELADO";
    Situacao[Situacao["DENEGADO"] = 6] = "DENEGADO";
})(Situacao = exports.Situacao || (exports.Situacao = {}));
(function (Situacao) {
    function toString(valor, textoCurto) {
        if (textoCurto === void 0) { textoCurto = false; }
        if (textoCurto) {
            switch (valor) {
                case Situacao.INVALIDO:
                    return 'Inválido';
                case Situacao.NAO_ENCONTRADO:
                    return 'Não Encontrado';
                case Situacao.ERRO_PROCESSAMENTO:
                    return 'Erro de Processamento';
                case Situacao.MODELO_INDISPONIVEL:
                    return 'Indisponível';
                case Situacao.AUTORIZADO:
                    return 'Autorizado';
                case Situacao.CANCELADO:
                    return 'Cancelado';
                case Situacao.DENEGADO:
                    return 'Denegado';
            }
        }
        else {
            switch (valor) {
                case Situacao.INVALIDO:
                    return 'Documento Inválido';
                case Situacao.NAO_ENCONTRADO:
                    return 'Documento não encontrado';
                case Situacao.ERRO_PROCESSAMENTO:
                    return 'Erro ao processar documento';
                case Situacao.MODELO_INDISPONIVEL:
                    return 'Modelo de documento indisponível no momento';
                case Situacao.AUTORIZADO:
                    return 'Documento autorizado';
                case Situacao.CANCELADO:
                    return 'Documento cancelado';
                case Situacao.DENEGADO:
                    return 'Documento denegado';
            }
        }
    }
    Situacao.toString = toString;
})(Situacao = exports.Situacao || (exports.Situacao = {}));
