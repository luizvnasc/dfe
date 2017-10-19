import { DFEValidador } from '../validador/dfe.validador';
import { StringUtils } from '../utils/string.utils';
import {ChaveAcesso} from "../model/chave-acesso.model";

export class DFEParser {


  public static parseCh(chave: string) {
    let chaveAcesso = new ChaveAcesso();
    chaveAcesso.chaveAcesso = StringUtils.cleanUp(chave);
    chaveAcesso.cUF = chaveAcesso.chaveAcesso.substr(0,2);
    chaveAcesso.dtEmissao = chaveAcesso.chaveAcesso.substr(2,4);
    chaveAcesso.cnpjEmitente = chaveAcesso.chaveAcesso.substr(6,14);
    chaveAcesso.modelo = chaveAcesso.chaveAcesso.substr(20,2);
    chaveAcesso.serie = chaveAcesso.chaveAcesso.substr(22,3);
    chaveAcesso.nNF = chaveAcesso.chaveAcesso.substr(25,9);
    chaveAcesso.tpEmissao =  chaveAcesso.chaveAcesso.substr(34,1);
    chaveAcesso.cNF = chaveAcesso.chaveAcesso.substr(35,8);
    chaveAcesso.cDV = chaveAcesso.chaveAcesso.substr(43,1);
    try{
      DFEValidador.validaChaveAcesso(chaveAcesso);
      return chaveAcesso;
    }catch(e){
      throw e;
    }
  }

}