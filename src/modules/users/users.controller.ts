import { Container, Inject, Service } from 'typedi';
import { Request, Response } from 'express';

import { UsersService } from './users.service';

export class UsersController {
  async createUser(req: Request, res: Response) {
    const service = Container.get(UsersService);
    const result = await service.createUser(req.body);
    return res.status(201).json(result);
  }

  async getMongoUser(req: Request, res: Response) {
    const service = Container.get(UsersService);
    const user = await service.getMongoUser(req.params.id);
    return res.status(200).json(user);
  }
}