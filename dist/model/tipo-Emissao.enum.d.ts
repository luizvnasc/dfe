export declare enum TipoEmissao {
    NORMAL = 1,
    CONTINGENCIA_FSIA = 2,
    CONTINGENCIA_SCAN = 3,
    CONTINGENCIA_DPEC = 4,
    CONTINGENCIA_FSDA = 5,
    CONTINGENCIA_SVCAN = 6,
    CONTINGENCIA_SVCRS = 7,
    CONTINGENCIA_OFFLINE = 9,
}
export declare namespace TipoEmissao {
    function toString(value: number): "Normal" | "Contingência FS-IA" | "Contingência SCAN" | "Contingência DPEC" | "Contingência FS-DA" | "Contingência SVC-AN" | "Contingência SVC-RS" | "Contingência Offline";
}
