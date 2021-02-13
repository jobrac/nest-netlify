import { NestFactory } from '@nestjs/core';
import { AppModule } from './app-module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import serverless from 'serverless-http';

const server = express();
let cacheNest = false;

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  await app.init();
};

const handler = serverless(server);

exports.handler = async (event: any, context: any) => {
  if (!cacheNest) {
    createNestServer(server)
      .then(() => console.log('Nest Ready'))
      .catch((err) => console.error('Nest broken', err));
    cacheNest = true;
  }

  return await handler(event, context);
};
