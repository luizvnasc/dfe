/**
 * Classe que representa uma chave de acesso de um Documento Fiscal eletrônico.
 * @author luizvnasc
 * @since 18/10/2017
 */
export declare class ChaveAcesso {
    chaveAcesso: string;
    cUF: string;
    dtEmissao: string;
    cnpjEmitente: string;
    modelo: string;
    serie: string;
    nNF: string;
    tpEmissao: string;
    cNF: string;
    cDV: string;
    readonly chaveFormatada: string;
    readonly dtEmissaoFormatada: string;
    readonly cnpjFormatado: string;
    readonly UF: string;
}
