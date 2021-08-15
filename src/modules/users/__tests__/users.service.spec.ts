import { UsersService } from '../users.service';
import { UserModel } from '../users.model';
import { Container } from 'typedi';
import 'reflect-metadata';
import { CreateUserInput, UserMongoData } from './users.mock';

describe('UsersService', () => {
  let service: Partial<UsersService>;
  let userModel: Partial<typeof UserModel> = {
    create: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(() => {
    Container.set('UserModel', userModel);
    service = Container.get(UsersService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createMongoUser',() => {
    it('should call to create user', async () => {
      userModel.create = jest.fn().mockResolvedValue(UserMongoData);
      expect(await (service as any).createMongoUser(CreateUserInput)).toEqual(UserMongoData);
      expect(userModel.create).toHaveBeenCalledWith(CreateUserInput);
    });
  });

  describe('getMongoUser', () => {
    it('should call to get user', async () => {
      userModel.findById = jest.fn().mockResolvedValue(UserMongoData);
      expect(await service.getMongoUser('id')).toEqual(UserMongoData);
      expect(userModel.findById).toHaveBeenCalledWith('id');
    });
  });

  describe('createUser', () => {
    it('should call to create user', async () => {
      (service as any).createMongoUser = jest.fn().mockResolvedValue(UserMongoData);
      expect(await service.createUser(CreateUserInput)).toEqual([UserMongoData.id]);
      expect((service as any).createMongoUser).toHaveBeenCalledWith(CreateUserInput);
    });
  });
});