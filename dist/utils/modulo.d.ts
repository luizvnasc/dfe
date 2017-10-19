export declare class Modulo {
    pesos: number[];
    base: number;
    casasDV: number;
    usarComplemento: boolean;
    correcaoDV: number[][];
    correcaoMult: number[][];
    correcaoMultSoma: boolean;
    fatorMultiplicativo: number;
    fatorAditivo: number;
    constructor(base: number, casasDV: number);
    /**
       * Retorna a soma dos dígitos de um número
       * Example: 11 = 2 , 31 = 4, etc.
       * @param pVal
       * @return int
       */
    getSomaDigitos(pVal: number): number;
    /**
       * Calcula a soma dos dígitos multiplicados pelo array de pesos
       * @return int Soma
       * @param String pNumero que representa o número a ser calculada a soma
       */
    private getSoma(pNumero);
    /**
       * Calcula o DV de um numero.
       * @param numero
       * @return
       */
    calcularDV(numero: string): number;
    testarDV(pValue: string): boolean;
}
