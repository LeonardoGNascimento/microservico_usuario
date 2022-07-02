import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class Usuario {
  id: Number;

  @IsNotEmpty({message: "nome é obrigatório"})
  @IsString({message: "nome deve ser do tipo string"})
  nome: String;

  @IsNotEmpty({message: "email é obrigatório"})
  @IsString({message: "email deve ser do tipo string"})
  email: String;

  @Exclude({toPlainOnly: true})
  @IsNotEmpty({message: "senha é obrigatório"})
  @IsString({message: "senha deve ser do tipo string"})
  senha: String;

  dataEntrada: Date;
}