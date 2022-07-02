import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { NestResponse } from 'src/core/http/NestResponse';
import { NestResponseBuilder } from 'src/core/http/NestResponseBuilder';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  @Post()
  @HttpCode(201)
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return new NestResponseBuilder().status(200).body(usuarioCriado).build();
  }

  @Get(':email')
  @HttpCode(200)
  public buscarPorEmail(@Param('email') email: String) {
    const usuario = this.usuarioService.buscaPorEmail(email);
    return new NestResponseBuilder().status(200).body(usuario).build();
  }
}
