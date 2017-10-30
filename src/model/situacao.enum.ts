export enum Situacao {
  INVALIDO,
  NAO_ENCONTRADO,
  ERRO_PROCESSAMENTO,
  MODELO_INDISPONIVEL,
  AUTORIZADO,
  CANCELADO,
  DENEGADO
}

export namespace Situacao {
  export function toString(valor : number, textoCurto : boolean = false) {
    if (textoCurto) {
      switch (valor) {
        case Situacao.INVALIDO:
          return 'Inválido';
        case Situacao.NAO_ENCONTRADO:
          return 'Não Encontrado';
        case Situacao.ERRO_PROCESSAMENTO:
          return 'Erro de Processamento';
        case Situacao.MODELO_INDISPONIVEL:
          return 'Indisponível';
        case Situacao.AUTORIZADO:
          return 'Autorizado';
        case Situacao.CANCELADO:
          return 'Cancelado';
        case Situacao.DENEGADO:
          return 'Denegado';
      }
    } else {
      switch (valor) {
        case Situacao.INVALIDO:
          return 'Documento Inválido';
        case Situacao.NAO_ENCONTRADO:
          return 'Documento não encontrado';
        case Situacao.ERRO_PROCESSAMENTO:
          return 'Erro ao processar documento';
        case Situacao.MODELO_INDISPONIVEL:
          return 'Modelo de documento indisponível no momento';
        case Situacao.AUTORIZADO:
          return 'Documento autorizado';
        case Situacao.CANCELADO:
          return 'Documento cancelado';
        case Situacao.DENEGADO:
          return 'Documento denegado';
      }
    }
  }
}