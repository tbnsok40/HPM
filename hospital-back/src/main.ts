import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('healthcare swagger')
    .setDescription('healthcare api description')
    .setVersion('0.0.1')
    .addTag('healthcare')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
