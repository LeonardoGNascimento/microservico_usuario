import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const response = contexto.getResponse();
    const message = exception.getResponse();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const messageBody = message instanceof Object ? {...message}: {message};

    response.status(status).json({
      timestamp: new Date().toISOString(),
      status,
      message: messageBody.message
    })
  }
}