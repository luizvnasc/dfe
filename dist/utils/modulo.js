"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Modulo = (function () {
    function Modulo(base, casasDV) {
        this.pesos = [2, 3, 4, 5, 6, 7, 8, 9]; //Array de pesos utilizado na multiplicação de cada dígito (A*B)
        this.usarComplemento = true; //Indica que o DV é obtido pelo complemento do módulo: DV = base - (soma % base)
        this.correcaoDV = [[10, 0], [11, 0]]; //Array para correção de DV nos casos em que o módulo retorna dois dígitos
        this.correcaoMult = []; //Array usado para corrigir casos de 2 dígitos já na multiplicação pelo array de pesos
        this.correcaoMultSoma = false; //Correcao de casos de dois dígitos na multiplicação pela soma dos dois dígitos. Por default é falso
        this.fatorMultiplicativo = 1; //Fator multiplicativo utilizado nas ponderações com o array de pesos
        this.fatorAditivo = 0; //Fator aditivo utilizado nas ponderações com o array de pesos
        this.base = base;
        this.casasDV = casasDV;
    }
    /**
       * Retorna a soma dos dígitos de um número
       * Example: 11 = 2 , 31 = 4, etc.
       * @param pVal
       * @return int
       */
    Modulo.prototype.getSomaDigitos = function (pVal) {
        var strVal = '' + pVal;
        var soma = 0;
        for (var c in _.toArray(strVal)) {
            soma += +c;
        }
        return soma;
    };
    /**
       * Calcula a soma dos dígitos multiplicados pelo array de pesos
       * @return int Soma
       * @param String pNumero que representa o número a ser calculada a soma
       */
    Modulo.prototype.getSoma = function (pNumero) {
        var vArray = _.toArray(pNumero);
        var auxSum = 0;
        for (var iValue = vArray.length - 1, iArray = 0; iValue >= 0; iValue--, iArray++) {
            if (iArray == this.pesos.length)
                iArray = 0;
            var intMult = +vArray[iValue] * this.pesos[iArray];
            //Se o array correcaoMult não estiver vazio é porque devemos corrigir os resultados
            //com dois dígitos durante a multiplicação pelo array de pesos
            for (var i = 0; i < this.correcaoMult.length; i++) {
                if (intMult == this.correcaoMult[i][0]) {
                    intMult = this.correcaoMult[i][1];
                }
            }
            if (this.correcaoMultSoma) {
                intMult = this.getSomaDigitos(intMult);
            }
            auxSum += intMult;
        }
        return auxSum;
    };
    /**
       * Calcula o DV de um numero.
       * @param numero
       * @return
       */
    Modulo.prototype.calcularDV = function (numero) {
        var dvCalculado = 0;
        //Faz o cálculo das ponderações
        //É passado -1 para o getSama pois o DV não está presente nesse Array.
        //Isso quer dizer que todos os números entrarão na soma
        var soma = this.getSoma(numero) * this.fatorMultiplicativo + this.fatorAditivo;
        if (this.usarComplemento) {
            dvCalculado = this.base - (soma % this.base);
        }
        else {
            dvCalculado = soma % this.base;
        }
        //Se o valor do DV Calculado coincide com algum valor do Array de correções, então deve ser substituído pela correção.
        for (var i = 0; i < this.correcaoDV.length; i++) {
            if (dvCalculado == this.correcaoDV[i][0]) {
                dvCalculado = this.correcaoDV[i][1];
            }
        }
        return dvCalculado;
    };
    Modulo.prototype.testarDV = function (pValue) {
        var dvCalculado = 0;
        //Testa todos os Dígitos Verificadores começando da direita para a esquerda
        for (var iCD = 0; iCD < this.casasDV; iCD++) {
            var soma = 0;
            //Recupera o dígito verificador da String
            var dvInformado = +pValue[pValue.length - iCD - 1];
            //Faz o cálculo das ponderações
            dvCalculado = this.calcularDV(pValue.substring(0, pValue.length - iCD - 1));
            //Verifica se o DV informado no número é igual ao DV calculado
            if (dvInformado != dvCalculado) {
                return false;
            }
        }
        //Se chegou aqui o DV está correto
        return true;
    };
    return Modulo;
}());
exports.Modulo = Modulo;
