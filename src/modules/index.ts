import { Router } from 'express';

import users from './users'

export default (): Router => {
  const router = Router();

  users(router);

  return router;
};