import { TipoOperacao } from './tipo-operacao.enum';
import { ModeloDFE } from './modelo-dfe.enum';
import { TipoEmissao } from './tipo-Emissao.enum';
import { Situacao } from './situacao.enum';
/**
 * Classe que representa um documento fiscal eletrônico.
 * @author luizvnasc
 * @since 30/10/2017
 */
export declare class DFE {
    indSituacao: Situacao;
    id: string;
    nNF: string;
    dhEmi: Date;
    dhSaiEnt: Date;
    tpNF: TipoOperacao;
    tpEmis: TipoEmissao;
    tpAmb: number;
    modelo: ModeloDFE;
    readonly chaveAcesso: string;
}
