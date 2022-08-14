import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/Auth/infra/services/jwt.guard";
import { Usuario } from "src/Usuario/dominio/models/usuario.model";
import { UsuarioService } from "../services/usuario.service";


@Controller('usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  @Post()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.CREATED)
  public async cria(
    @Body() usuario: Usuario
  ): Promise<Usuario> {
    const usuarioCriado = await this.usuarioService.cria(usuario);

    return usuarioCriado;
  }

  @Get()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async listar(): Promise<Usuario[]> {
    const usuarios = await this.usuarioService.listar();

    return usuarios;
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async atualizar(
    @Param('id') id: number,
    @Body() body
  ): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.id = id
    usuario.nome = body.nome;
    usuario.email = body.email;

    const resultado = await this.usuarioService.atualizar(usuario);

    return resultado
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async buscar(
    @Param('id') id: number
  ): Promise<Usuario> {
    const usuario = await this.usuarioService.buscar(id);

    return usuario;
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  public async excluir(
    @Param('id') id: number
  ): Promise<void> {
    const resultado = await this.usuarioService.excluir(id);

    return resultado;
  }
}
