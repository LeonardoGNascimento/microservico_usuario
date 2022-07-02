import { UsuarioModule } from './Usuario/usuario.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsuarioModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
