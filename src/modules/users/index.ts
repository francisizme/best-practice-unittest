import { Router } from 'express';
import { Container } from 'typedi';

import { UsersController } from './users.controller';

const subRouter = Router();
export default (router: Router): void => {
  const controller = new UsersController();

  router.use('/users', subRouter);

  subRouter.post('/?', controller.createUser);
  subRouter.get('/mongo/:id/?', controller.getMongoUser);
};