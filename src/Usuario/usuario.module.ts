import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './controllers/usuario.controller';
import { Usuario } from './models/usuario.model';
import { UsuarioService } from './services/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule {}
