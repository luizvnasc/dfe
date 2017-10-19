"use strict";
/**
 *  Enum com os códigos de cada estado.
 *  Esses Códigos são utilizados na emissão de Documentos Fiscais Eletrônicos (NFC-e, NF-e, CT-e, MDF-e e CF-e) e são informados no campo cUF.
 *  @see{ @link https://ww2.ibge.gov.br/home/geociencias/areaterritorial/principal.shtm |IBGE}
 *
 *  @author luizvnasc
 *  @since 18/10/2017
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CUF;
(function (CUF) {
    CUF[CUF["RO"] = 11] = "RO";
    CUF[CUF["AC"] = 12] = "AC";
    CUF[CUF["AM"] = 13] = "AM";
    CUF[CUF["RR"] = 14] = "RR";
    CUF[CUF["PA"] = 15] = "PA";
    CUF[CUF["AP"] = 16] = "AP";
    CUF[CUF["TO"] = 17] = "TO";
    CUF[CUF["MA"] = 21] = "MA";
    CUF[CUF["PI"] = 22] = "PI";
    CUF[CUF["CE"] = 23] = "CE";
    CUF[CUF["RN"] = 24] = "RN";
    CUF[CUF["PB"] = 25] = "PB";
    CUF[CUF["PE"] = 26] = "PE";
    CUF[CUF["AL"] = 27] = "AL";
    CUF[CUF["SE"] = 28] = "SE";
    CUF[CUF["BA"] = 29] = "BA";
    CUF[CUF["MG"] = 31] = "MG";
    CUF[CUF["ES"] = 32] = "ES";
    CUF[CUF["RJ"] = 33] = "RJ";
    CUF[CUF["SP"] = 35] = "SP";
    CUF[CUF["PR"] = 41] = "PR";
    CUF[CUF["SC"] = 42] = "SC";
    CUF[CUF["RS"] = 43] = "RS";
    CUF[CUF["MS"] = 50] = "MS";
    CUF[CUF["MT"] = 51] = "MT";
    CUF[CUF["GO"] = 52] = "GO";
    CUF[CUF["DF"] = 53] = "DF";
})(CUF = exports.CUF || (exports.CUF = {}));
