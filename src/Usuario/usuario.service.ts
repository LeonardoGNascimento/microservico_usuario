import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [
    {
      id: 1,
      dataEntrada: new Date(),
      email: "leo@leo",
      nome: "leo",
      senha: '123'
    }
  ];

  public cria(usuario: Usuario): Usuario|String {
    const verificarEmail = this.buscaPorEmail(usuario.email);

    if(verificarEmail) {
      return "Email deve ser unico";
    }

    this.usuarios.push(usuario);
    return usuario;
  }

  public buscaPorEmail(email: String): Usuario {
    const usuario = this.usuarios.find(usuario => usuario.email == email);
    return usuario;
  }
}
