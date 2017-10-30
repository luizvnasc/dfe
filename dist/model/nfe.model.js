"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dfe_model_1 = require("./dfe.model");
/**
 * Classe que representa uma nota fiscal eletrônica.
 * @author luizvnasc
 * @since 27/10/2017
 */
var NFE = (function (_super) {
    __extends(NFE, _super);
    function NFE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itens = [];
        return _this;
    }
    return NFE;
}(dfe_model_1.DFE));
exports.NFE = NFE;
