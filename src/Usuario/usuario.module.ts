import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {}
