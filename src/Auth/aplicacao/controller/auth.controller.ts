import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "../service/auth.service";

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