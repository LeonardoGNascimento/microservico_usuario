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

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  public buscaPorNome(nome: String) {
    const usuario = this.usuarios.find(usuario => usuario.nome = nome); 
    return usuario;
  }
}
