import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../usuario.service';

@Controller('usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  @Post()
  public cria(@Body() usuario: Usuario) {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }

  @Get(':email')
  public buscarPorEmail(@Param('email') email: String) {
    const usuario = this.usuarioService.buscaPorEmail(email);
    return usuario;
  }
}
