import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  app.setGlobalPrefix('api');
  await app.listen(PORT, ()=>console.log(`server was started on port:${PORT} ...`));
}
bootstrap();
