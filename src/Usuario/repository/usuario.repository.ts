/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioRepository {

  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
  ) { }

  async cadastrar(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ email: email })

    if(!usuario) {
      return null;
    }

    return usuario;
  }

  async listar(): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.find();

    if(!usuarios) {
      return null;
    }

    return usuarios;
  }

  async buscar(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id: id });

    if(!usuario) {
      return null;
    }

    return usuario;
  }

  async atualizar(usuario: Usuario) {
    const resultado = await this.usuarioRepository.update(usuario.id, usuario)

    return resultado;
  }

  async excluir(usuario: Usuario) {
    const resultado = await this.usuarioRepository.delete(usuario.id)

    return resultado;
  }
}
