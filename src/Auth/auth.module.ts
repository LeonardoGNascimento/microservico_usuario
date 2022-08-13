import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from 'src/Usuario/usuario.module';
import { AuthController } from './aplicacao/controller/auth.controller';
import { AuthService } from './aplicacao/service/auth.service';
import { JwtStrategy } from './aplicacao/service/jwt.strategy';

@Module({
  imports: [
    UsuarioModule, 
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
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
