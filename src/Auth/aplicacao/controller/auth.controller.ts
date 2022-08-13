import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { JwtGuard } from "../service/jwt.guard";

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

 
  @Post('login')
  async login(@Body() body) {
    return await this.authService.login(body);
  }
}