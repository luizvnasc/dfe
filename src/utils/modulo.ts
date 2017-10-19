import * as _ from 'lodash';

export class Modulo{

  pesos: number[] = [2,3,4,5,6,7,8,9]; //Array de pesos utilizado na multiplicação de cada dígito (A*B)
  base: number; //Base do módulo
  casasDV: number; //Tamanho do digito verificador
  usarComplemento: boolean = true; //Indica que o DV é obtido pelo complemento do módulo: DV = base - (soma % base)
  correcaoDV: number[][] = [[10,0],[11,0]]; //Array para correção de DV nos casos em que o módulo retorna dois dígitos
  correcaoMult: number[][] = []; //Array usado para corrigir casos de 2 dígitos já na multiplicação pelo array de pesos
  correcaoMultSoma: boolean = false; //Correcao de casos de dois dígitos na multiplicação pela soma dos dois dígitos. Por default é falso
  fatorMultiplicativo: number = 1; //Fator multiplicativo utilizado nas ponderações com o array de pesos
  fatorAditivo: number = 0; //Fator aditivo utilizado nas ponderações com o array de pesos

  constructor(base: number, casasDV: number){
    this.base = base;
    this.casasDV = casasDV;
  }

  /**
	 * Retorna a soma dos dígitos de um número
	 * Example: 11 = 2 , 31 = 4, etc.
	 * @param pVal
	 * @return int
	 */
  getSomaDigitos(pVal: number){
    let strVal = '' + pVal;
    let soma = 0;
    for(let c in _.toArray(strVal)){
      soma += +c;
    }
    return soma;
  }

  /**
	 * Calcula a soma dos dígitos multiplicados pelo array de pesos
	 * @return int Soma
	 * @param String pNumero que representa o número a ser calculada a soma
	 */
	private getSoma(pNumero: string):number{
		let vArray = _.toArray(pNumero);
		let auxSum = 0;
		for(let iValue = vArray.length-1, iArray = 0; iValue>=0; iValue--,iArray++)
		{
			if(iArray == this.pesos.length)
				iArray = 0;
			let intMult = +vArray[iValue] * this.pesos[iArray];

			//Se o array correcaoMult não estiver vazio é porque devemos corrigir os resultados
			//com dois dígitos durante a multiplicação pelo array de pesos
			for (let i=0; i < this.correcaoMult.length; i++){
				if (intMult == this.correcaoMult[i][0]){
					intMult = this.correcaoMult[i][1];
				}
			}
			if(this.correcaoMultSoma){
				intMult = this.getSomaDigitos(intMult);
			}
			auxSum += intMult;
			
		}
		return auxSum;
	}

  /**
	 * Calcula o DV de um numero.
	 * @param numero
	 * @return
	 */
	calcularDV(numero: string): number {
		let dvCalculado = 0;
		//Faz o cálculo das ponderações
		//É passado -1 para o getSama pois o DV não está presente nesse Array.
		//Isso quer dizer que todos os números entrarão na soma
		let soma = this.getSoma(numero) * this.fatorMultiplicativo + this.fatorAditivo;

		if (this.usarComplemento) {
			dvCalculado = this.base - (soma % this.base);
		} else {
			dvCalculado = soma % this.base;
		}

		//Se o valor do DV Calculado coincide com algum valor do Array de correções, então deve ser substituído pela correção.
		for (let i=0; i < this.correcaoDV.length; i++){
			if (dvCalculado == this.correcaoDV[i][0]){
				dvCalculado = this.correcaoDV[i][1];
			}
		}
		return dvCalculado;
	}


  testarDV(pValue: string)
	{
		let dvCalculado = 0;

		//Testa todos os Dígitos Verificadores começando da direita para a esquerda
		for (let iCD = 0; iCD < this.casasDV; iCD++)
		{
			let soma = 0;
			//Recupera o dígito verificador da String
			let dvInformado = +pValue[pValue.length - iCD - 1];

			//Faz o cálculo das ponderações
			dvCalculado = this.calcularDV(pValue.substring(0, pValue.length - iCD - 1));
			
			//Verifica se o DV informado no número é igual ao DV calculado
			if (dvInformado != dvCalculado){
				return false;
			}
		}
		//Se chegou aqui o DV está correto
		return true;
	}

}