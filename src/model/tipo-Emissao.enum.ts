export enum TipoEmissao {
  NORMAL = 1,
  CONTINGENCIA_FSIA = 2,
  CONTINGENCIA_SCAN = 3,
  CONTINGENCIA_DPEC = 4,
  CONTINGENCIA_FSDA = 5,
  CONTINGENCIA_SVCAN = 6,
  CONTINGENCIA_SVCRS = 7,
  CONTINGENCIA_OFFLINE = 9
}
export namespace TipoEmissao {
  export function toString(value : number) {
    switch (value) {
      case TipoEmissao.NORMAL:
        return 'Normal'
      case TipoEmissao.CONTINGENCIA_FSIA:
        return 'Contingência FS-IA'
      case TipoEmissao.CONTINGENCIA_SCAN:
        return 'Contingência SCAN'
      case TipoEmissao.CONTINGENCIA_DPEC:
        return 'Contingência DPEC'
      case TipoEmissao.CONTINGENCIA_FSDA:
        return 'Contingência FS-DA'
      case TipoEmissao.CONTINGENCIA_SVCAN:
        return 'Contingência SVC-AN'
      case TipoEmissao.CONTINGENCIA_SVCRS:
        return 'Contingência SVC-RS'
      case TipoEmissao.CONTINGENCIA_OFFLINE:
        return 'Contingência Offline'

    }
  }
}