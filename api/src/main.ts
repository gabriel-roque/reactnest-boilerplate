import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { application } from 'config/application';
import { ModifyBodyResponseInterceptor } from 'interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix(application.uriPrefix);

  app.useGlobalInterceptors(new ModifyBodyResponseInterceptor());

  await app.listen(application.port);
}
bootstrap();
