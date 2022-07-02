import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

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

  @Get(':nomeUsuario')
  public buscaPorNome(@Param('nomeUsuario') nome: String) {
    const usuario = this.usuarioService.buscaPorNome(nome);
    return usuario;
  }
}
