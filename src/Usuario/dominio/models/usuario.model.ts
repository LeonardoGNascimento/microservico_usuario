import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: "nome é obrigatório" })
  @IsString({ message: "nome deve ser do tipo string" })
  nome: string;

  @Column()
  @IsNotEmpty({ message: "email é obrigatório" })
  @IsString({ message: "email deve ser do tipo string" })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  @IsNotEmpty({ message: "senha é obrigatório" })
  @IsString({ message: "senha deve ser do tipo string" })
  senha: string;

}