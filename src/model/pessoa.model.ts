import {Endereco} from './endereco.model';

export class Pessoa {
  cpfCnpj : string;
  razaoSocial : string;
  endereco : Endereco = new Endereco();
}