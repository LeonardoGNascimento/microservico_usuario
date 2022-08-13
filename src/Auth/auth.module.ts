import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from 'src/Usuario/usuario.module';
import { AuthController } from './aplicacao/controller/auth.controller';
import { AuthService } from './aplicacao/service/auth.service';
import { JwtStrategy } from './aplicacao/service/jwt.strategy';
import { JwtConfig } from './aplicacao/service/JwtConfig';

@Module({
  imports: [
    UsuarioModule, 
    JwtModule.register({
      secret: JwtConfig.SECRET_PASS,
      signOptions: { expiresIn: "1h"}
    })
  ],
  controllers:[AuthController],
  providers: [
    AuthService, 
    JwtStrategy
  ],
})
export class AuthModule { }
