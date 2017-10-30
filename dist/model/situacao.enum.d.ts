export declare enum Situacao {
    INVALIDO = 0,
    NAO_ENCONTRADO = 1,
    ERRO_PROCESSAMENTO = 2,
    MODELO_INDISPONIVEL = 3,
    AUTORIZADO = 4,
    CANCELADO = 5,
    DENEGADO = 6,
}
export declare namespace Situacao {
    function toString(valor: number, textoCurto?: boolean): "Inválido" | "Não Encontrado" | "Erro de Processamento" | "Indisponível" | "Autorizado" | "Cancelado" | "Denegado" | "Documento Inválido" | "Documento não encontrado" | "Erro ao processar documento" | "Modelo de documento indisponível no momento" | "Documento autorizado" | "Documento cancelado" | "Documento denegado";
}
