import { AuthModule } from './Auth/auth.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/core/filter/HttpException.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Usuario/dominio/models/usuario.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      database: `${process.env.DATABASE}`,
      type: "mysql",
      synchronize: true,
      username: `${process.env.DATABASE_USER}`,
      password: `${process.env.DATABASE_PASSWORD}`,
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
