import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Usuario } from '../models/usuario.model';
import { UsuarioRepository } from '../repository/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository
  ) { }

  public async cria(usuarioRequest: Usuario): Promise<Usuario> {

    const verificarEmail = await this.usuarioRepository.buscarPorEmail(usuarioRequest.email);

    if (verificarEmail) {
      throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST);
    }

    const usuario = await this.usuarioRepository.cadastrar(usuarioRequest);

    return usuario;
  }

  public async buscar(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.buscar(id);

    if (!usuario) {
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  public async listar(): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.listar();

    if (!usuarios) {
      throw new HttpException('Nenhum usuario encontrado', HttpStatus.NOT_FOUND);
    }

    return usuarios;
  }

  public async excluir(id: number): Promise<void> {
    const usuario = await this.buscar(id);
    await this.usuarioRepository.excluir(usuario);
  }

  public async atualizar(usuario: Usuario): Promise<Usuario> {
    await this.buscar(usuario.id);
    await this.usuarioRepository.atualizar(usuario);

    return usuario;
  }
}
