import { Item } from '../model/item.model';
import { Endereco } from '../model/endereco.model';
import { ModeloDFE } from '../model/modelo-dfe.enum';
import { DFE } from '../model/dfe.model';
import { NFE } from '../model/nfe.model';
import { DFEValidador } from '../validador/dfe.validador';
import { StringUtils } from '../utils/string.utils';
import {ChaveAcesso} from "../model/chave-acesso.model";
import { Pessoa } from 'model/pessoa.model';
import * as _ from 'lodash'
export class DFEParser {


  public static parseCh(chave: string): ChaveAcesso {
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

  public static parseDFE(data: any): DFE{
    try{
      let dfe = new DFE()
      dfe.id = data.id;
      dfe.indSituacao = data.indSituacao;
      dfe.nNF = data.nNF;
      dfe.dhEmi = data.dhEmi;
      dfe.dhSaiEnt = data.dhSaiEnt;
      dfe.tpNF = data.tpNF;
      dfe.tpEmis = data.tpEmis;
      dfe.tpAmb = data.tpAmb;

      let chave = this.parseCh(data.id);
      switch(+chave.modelo){
        case ModeloDFE.NFe:
          return this.parseNFE(dfe,data);
        default:
          throw new Error('Modelo não implementado.');
      }
    } catch (e){
      throw e;
    }
    
  }

  private static parseNFE(dfe :DFE,data: any): NFE{
    let nfe  =  <NFE> dfe;
    
    nfe.finNFe = data.finNFe;
    
    let emitente = new Pessoa();
    emitente.razaoSocial = data.nomeEmit;
    emitente.endereco = new Endereco();
    emitente.endereco.lgr = data.lgrEmit;
    emitente.endereco.bairro = data.bairroEmit;
    emitente.endereco.numero = data.nroEmit;
    emitente.endereco.cidade = data.muniEmit;
    emitente.endereco.uf = data.ufEmit;
    
    if(_.isNil(data.cnpjEmit) || data.cnpjEmit == '' ){
      emitente.cpfCnpj = data.cpfEmit;
    }else{
      emitente.cpfCnpj = data.cnpjEmit;
    }

    nfe.emitente = emitente;

    let destinatario = new Pessoa();
    destinatario.razaoSocial = data.nomeDest;
    destinatario.endereco = new Endereco();
    destinatario.endereco.lgr = data.lgrDest;
    destinatario.endereco.bairro = data.bairroDest;
    destinatario.endereco.numero = data.nroDest;
    destinatario.endereco.cidade = data.muniDest;
    destinatario.endereco.uf = data.ufDest;
    
    if(_.isNil(data.cnpjDest) || data.cnpjDest == '' ){
      emitente.cpfCnpj = data.cpfDest;
    }else{
      emitente.cpfCnpj = data.cnpjDest;
    }
    nfe.destinatario = destinatario;

    nfe.itens = data.itens;

    nfe.vBCTot = data.vBCTot;
    nfe.vICMSTot = data.vICMSTot;
    nfe.vProdTot = data.vProdTot;
    nfe.vNFTot = data.vNFTot;



    return nfe;
  }

}