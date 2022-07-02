import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from '../models/usuario.model';

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

  public cria(usuarioRequest: Usuario): Usuario|String {
    const verificarEmail = this.usuarios.find(usuario => usuario.email == usuarioRequest.email);

    if(verificarEmail) {
      throw new HttpException('Email deve ser unico', HttpStatus.NOT_FOUND);
    }

    this.usuarios.push(usuarioRequest);
    return usuarioRequest;
  }

  public buscaPorEmail(email: String): Usuario {
    const usuario = this.usuarios.find(usuario => usuario.email == email);

    if(!usuario) {
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }
}
