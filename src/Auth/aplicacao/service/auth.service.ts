import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/Usuario/aplicacao/services/usuario.service";
import { Usuario } from "src/Usuario/dominio/models/usuario.model";
import * as crypto from 'crypto';


@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) { }

  async login(user: any) {

    const usuario = new Usuario();
    usuario.email = user.email;
    usuario.senha = crypto.createHash('md5').update(user.senha).digest("hex");

    const resultado = await this.usuarioService.login(usuario);
    
    const payload = { email: resultado.email, id: resultado.id };
    return {
      usuario: resultado,
      access_token: this.jwtService.sign(payload),
    };
  }
}
