import { TipoEmissao } from './tipo-Emissao.enum';
import { Situacao } from './situacao.enum';
/**
 * Classe que representa um documento fiscal eletrônico.
 * @author luizvnasc
 * @since 30/10/2017
 */
export class DFE{
  indSituacao: Situacao;
  id: string;
  nNF: string;
  dhEmi:Date;
  dhSaiEnt:Date;
  tpNF:number; //criar enum;
  tpEmis: TipoEmissao;
  tpAmb: number;
}