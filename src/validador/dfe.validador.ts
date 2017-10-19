import { Modulo } from '../utils/modulo';
import { ModeloDFE } from '../model/modelo-dfe.enum';
import {CUF} from '../model/codigo-uf.enum';
import {ChaveAcesso} from '../model/chave-acesso.model';
import * as _ from 'lodash';

export class DFEValidador {

  static validaChaveAcesso(chave : ChaveAcesso) {
    if (_.isNaN(+ chave.chaveAcesso)) {
      throw new Error('Chave de acesso contém caracteres inválidos.')
    }
    if(chave.chaveAcesso.length != 44)
      throw new Error('A chave de acesso deve conter 44 dígitos.')
    this.validaCUF(chave.cUF);
    this.validaDtEmissao(chave.dtEmissao);
    this.validaCNPJ(chave.cnpjEmitente);
    this.validaModelo(chave.modelo);
    this.validarDigito(chave.chaveAcesso);
  }

  static validaCUF(cuf : string) {
    if (!(+ cuf in CUF)) 
      throw new Error('Código do estado do emitente inválido.')
  }

  static validaDtEmissao(dtEmissao : string) {
    let ano = +dtEmissao.substr(0, 2);
    let mes = +dtEmissao.substr(2, 2);
    if ((mes < 1 || mes > 12) || (ano < 0 || ano > 99)) {
      throw new Error('Data de emissão inválida');
    }
  }

  static validaCNPJ(cnpj: string) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') 
      return false;
    
    if (cnpj.length != 14) 
      throw new Error('CNPJ de tamanho inválido.')
    
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999") 
      throw new Error('CNPJ inválido.');
    
    let m11 = new Modulo(11,1);
    m11.pesos = [2,3,4,5,6,7,8,9];
    if(!m11.testarDV(cnpj)){
      throw new Error('CNPJ inválido. Digito errado.');
    }

  }

  static validaModelo(modelo: string){
    if(!(+modelo in ModeloDFE))
      throw new Error('Modelo de DFe inválido ou não suportado pelo aplicativo.');
  }

  static validaSerie(serie:string){
    if(+serie in _.range(890,900))
      throw new Error('Série informada está em faixa reservada, entre 890 e 899.');
  }

  static validarDigito(chave: string){
    let m11 = new Modulo(11,1);
    m11.pesos = [2,3,4,5,6,7,8,9];
    if(!m11.testarDV(chave)){
      throw new Error('Dígito Validador inválido.');
    }
  }
}