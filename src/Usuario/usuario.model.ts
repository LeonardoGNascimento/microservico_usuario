import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
  id: Number;

  @IsNotEmpty({
    message: "nome é obrigatório"
  })
  @IsString({
    message: "nome deve ser do tipo string"
  })
  nome: String;

  @IsNotEmpty({
    message: "email é obrigatório"
  })
  @IsEmail({
    message: "email deve ser válido"
  })
  email: String;

  @IsNotEmpty({
    message: "senha é obrigatório"
  })
  senha: String;
  dataEntrada: Date;
}