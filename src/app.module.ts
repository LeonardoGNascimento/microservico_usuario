import { AuthModule } from './Auth/auth.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/core/filter/HttpException.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Usuario/models/usuario.model';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    TypeOrmModule.forRoot({
      database: "usuarios",
      type: "mysql",
      synchronize: true,
      username: "root",
      password: "root",
      entities: [Usuario]
    })
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule { }
