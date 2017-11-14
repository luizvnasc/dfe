import { Finalidade } from './finalidade.enum';
import { Item } from './item.model';
import { Pessoa } from './pessoa.model';
import { DFE } from './dfe.model';
/**
 * Classe que representa uma nota fiscal eletrônica.
 * @author luizvnasc
 * @since 27/10/2017
 */
export class NFE extends DFE{
  finNFe: Finalidade;
  emitente: Pessoa;
  destinatario:Pessoa;
  itens: Item[] = [];
  vBCTot: string;
  vICMSTot: string;
  vProdTot: string;
  vNFTot: string;
}