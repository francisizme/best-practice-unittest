import express from 'express';
import 'reflect-metadata';
import cors from 'cors';

import { prerequisite } from './shared/prerequiste';
import routers from './modules';

import config from '../configs';

const bootstrap = async () => {
  const port = config.port;
  const app = express();

  await prerequisite();

  app.use(cors());
  app.use(express.json());
  app.use(routers());

  app.listen(port, () => console.log('Server started at port ', port));
}

bootstrap();