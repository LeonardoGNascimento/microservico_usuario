import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { stringify } from 'querystring';
import { Usuario } from 'src/Usuario/models/usuario.model';
import { UsuarioService } from 'src/Usuario/services/usuario.service';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) { }

  async login(user: any) {

    const usuario = new Usuario();
    usuario.email = user.email;
    usuario.senha = user.senha;

    const resultado = await this.usuarioService.login(usuario);
    
    const payload = { email: resultado.email, id: resultado.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
