export enum Finalidade{
  NORMAL = 1,
  COMPLEMENTAR = 2,
  AJUSTE = 3,
  DEVOLUCAO = 4
}

export namespace Finalidade{
  export function toString(fin:Finalidade):string{
    switch(fin){
      case Finalidade.NORMAL:
        return "Normal";
      case Finalidade.COMPLEMENTAR:
        return "Complementar";
      case Finalidade.AJUSTE:
        return "de Ajuste";
      case Finalidade.DEVOLUCAO:
        return "Devolução de mercadoria";
    }
  }
}