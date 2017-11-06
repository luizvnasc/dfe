import { DFE } from '../model/dfe.model';
import { ChaveAcesso } from "../model/chave-acesso.model";
export declare class DFEParser {
    static parseCh(chave: string): ChaveAcesso;
    static parseDFE(data: any): DFE;
    private static parseNFE(dfe, data);
}
