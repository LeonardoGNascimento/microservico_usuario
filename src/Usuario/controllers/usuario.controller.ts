import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { NestResponse } from 'src/common/core/http/NestResponse';
import { NestResponseBuilder } from 'src/common/core/http/NestResponseBuilder';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async cria(@Body() usuario: Usuario): Promise<NestResponse> {
    const usuarioCriado = await this.usuarioService.cria(usuario);
    return new NestResponseBuilder().status(HttpStatus.CREATED).body(usuarioCriado).build();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async listar(): Promise<NestResponse> {
    const usuarios = await this.usuarioService.listar();
    return new NestResponseBuilder().status(HttpStatus.OK).body(usuarios).build();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async atualizar(@Param('id') id, @Body() body): Promise<NestResponse> {
    const usuario = new Usuario();
    usuario.nome = body.nome;
    usuario.email = body.email;

    const resultado = await this.usuarioService.atualizar(usuario);
    return new NestResponseBuilder().status(HttpStatus.OK).body(resultado).build();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async buscar(@Param('id') id: number): Promise<NestResponse> {
    const usuario = await this.usuarioService.buscar(id);
    return new NestResponseBuilder().status(HttpStatus.OK).body(usuario).build();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async excluir(@Param('id') id: number) {
    await this.usuarioService.excluir(id);
  }
}
