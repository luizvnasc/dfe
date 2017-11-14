export enum TipoOperacao{
  ENTRADA = 0,
  SAIDA = 1
}

export namespace TipoOperacao{
  export function toString(tp: TipoOperacao): string{
    switch(tp){
      case TipoOperacao.ENTRADA:
        return "Entrada";
      case TipoOperacao.SAIDA:
        return "Saída";
    }

  }
}