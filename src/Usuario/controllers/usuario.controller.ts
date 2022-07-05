import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  @Post()
  public async cria(
    @Body() usuario: Usuario,
    @Res() response: Response
  ) {
    const usuarioCriado = await this.usuarioService.cria(usuario);
    response.json(usuarioCriado).status(HttpStatus.CREATED)
  }

  @Get()
  public async listar(
    @Res() response: Response
  ) {
    const usuarios = await this.usuarioService.listar();
    response.json(usuarios).status(HttpStatus.OK)
  }

  @Patch(':id')
  public async atualizar(
    @Param('id') id,
    @Body() body,
    @Res() response: Response
  ) {
    const usuario = new Usuario();
    usuario.nome = body.nome;
    usuario.email = body.email;

    const resultado = await this.usuarioService.atualizar(usuario);
    response.json(resultado).status(HttpStatus.OK)
  }

  @Get(':id')
  public async buscar(
    @Param('id') id: number,
    @Res() response: Response
  ) {
    const usuario = await this.usuarioService.buscar(id);
    response.json(usuario).status(HttpStatus.OK)
  }

  @Delete(':id')
  public async excluir(
    @Param('id') id: number,
    @Res() response: Response
  ) {
    await this.usuarioService.excluir(id);
    response.status(HttpStatus.NO_CONTENT)
  }
}
