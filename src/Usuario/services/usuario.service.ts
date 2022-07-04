import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
  ) { }

  public async cria(usuarioRequest: Usuario): Promise<Usuario> {

    const verificarEmail = await this.usuarioRepository.findOneBy({ email: usuarioRequest.email })

    if (verificarEmail) {
      throw new HttpException('Email deve ser unico', HttpStatus.BAD_REQUEST);
    }

    const usuario = await this.usuarioRepository.save(usuarioRequest);

    return usuario;
  }

  public async buscar(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({id: id});

    if (!usuario) {
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  public async listar(): Promise<Usuario[]> {
    const usuario = await this.usuarioRepository.find();

    if (!usuario) {
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  public async excluir(id: number) {
    const usuario = await this.buscar(id);
    await this.usuarioRepository.delete(usuario.id);
  }

  public async atualizar(usuario: Usuario): Promise<Usuario> {
    const buscarUsuario = await this.buscar(usuario.id);

    buscarUsuario.nome = usuario.nome;
    buscarUsuario.email = usuario.email;

    await this.usuarioRepository.update(buscarUsuario.id, buscarUsuario)
    
    return buscarUsuario;
  }
}
