import { TipoOperacao } from './tipo-operacao.enum';
import { ModeloDFE } from './modelo-dfe.enum';
import {TipoEmissao} from './tipo-Emissao.enum';
import {Situacao} from './situacao.enum';
/**
 * Classe que representa um documento fiscal eletrônico.
 * @author luizvnasc
 * @since 30/10/2017
 */
export class DFE {
  indSituacao : Situacao;
  id : string;
  nNF : string;
  dhEmi : Date;
  dhSaiEnt : Date;
  tpNF : TipoOperacao; //criar enum;
  tpEmis : TipoEmissao;
  tpAmb : number;
  modelo: ModeloDFE;
  
  get chaveAcesso() {
    let chaveFormatada = '';
    for (let i = 0; i < 11; i++) {
      if (i < 10) 
        chaveFormatada += this.id.substr(4 * i, 4) + '.';
      else 
        chaveFormatada += this
          .id
          .substr(4 * i, 4);
      }
    return chaveFormatada;
  }

}