import { ModeloDFE } from './modelo-dfe.enum';
import { TipoEmissao } from './tipo-Emissao.enum';
import { CUF } from './codigo-uf.enum';
/**
 * Classe que representa uma chave de acesso de um Documento Fiscal eletrônico.
 * @author luizvnasc
 * @since 18/10/2017
 */
export class ChaveAcesso{
  
  chaveAcesso: string; //chave sem ser quebrada.
  cUF: string; //Código da UF do emitente do Documento Fiscal;
  dtEmissao: string; //Ano e Mês de emissão da NF-e;
  cnpjEmitente: string; //CNPJ do emitente;
  modelo: string; //Modelo do Documento Fiscal;
  serie: string; //Série do Documento Fiscal;
  nNF: string; //Número do Documento Fiscal;
  tpEmissao: string; //forma de emissão da NF-e;
  cNF: string; //Código Numérico que compõe a Chave de Acesso;
  cDV: string; //Dígito Verificador da Chave de Acesso.

  get chaveFormatada(){
    let chaveFormatada = '';
    for(let i = 0; i < 11; i++){
      if(i < 10)
        chaveFormatada += this.chaveAcesso.substr(4*i,4) + '.';
      else
        chaveFormatada += this.chaveAcesso.substr(4*i,4);
    }
    return chaveFormatada;
  }

  get dtEmissaoFormatada(){
    return this.dtEmissao.substr(2,2) + '/' + this.dtEmissao.substr(0,2);
  }

  get cnpjFormatado(){
    return this.cnpjEmitente.substr(0,2) + '.' + this.cnpjEmitente.substr(2,3) + '.' + this.cnpjEmitente.substr(5,3) + '/' + this.cnpjEmitente.substr(8,4) + '-' + this.cnpjEmitente.substr(12,2)
  }

  get UF(){
    console.log(+this.cUF)
    return CUF[+this.cUF]
  }

  get tipoEmissaoFormatado(){
    return TipoEmissao.toString(+this.tpEmissao);
  }

  get modeloFormatado(){
    return ModeloDFE[+this.modelo];
  }
}