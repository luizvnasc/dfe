import { ChaveAcesso } from '../model/chave-acesso.model';
export declare class DFEValidador {
    static validaChaveAcesso(chave: ChaveAcesso): void;
    static validaCUF(cuf: string): void;
    static validaDtEmissao(dtEmissao: string): void;
    static validaCNPJ(cnpj: string): boolean;
    static validaModelo(modelo: string): void;
    static validaSerie(serie: string): void;
    static validarDigito(chave: string): void;
}
