"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Finalidade;
(function (Finalidade) {
    Finalidade[Finalidade["NORMAL"] = 1] = "NORMAL";
    Finalidade[Finalidade["COMPLEMENTAR"] = 2] = "COMPLEMENTAR";
    Finalidade[Finalidade["AJUSTE"] = 3] = "AJUSTE";
    Finalidade[Finalidade["DEVOLUCAO"] = 4] = "DEVOLUCAO";
})(Finalidade = exports.Finalidade || (exports.Finalidade = {}));
(function (Finalidade) {
    function toString(fin) {
        switch (fin) {
            case Finalidade.NORMAL:
                return "Normal";
            case Finalidade.COMPLEMENTAR:
                return "Complementar";
            case Finalidade.AJUSTE:
                return "de Ajuste";
            case Finalidade.DEVOLUCAO:
                return "Devolução de mercadoria";
        }
    }
    Finalidade.toString = toString;
})(Finalidade = exports.Finalidade || (exports.Finalidade = {}));
