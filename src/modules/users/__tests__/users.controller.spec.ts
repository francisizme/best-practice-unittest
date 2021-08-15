import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { Container } from 'typedi';
import { CreateUserInput } from './users.mock';
import { ExpressResponse, WrapExpressRequest } from '../../../shared/test.helper';
import { mocked } from 'ts-jest/dist/utils/testing';

jest.mock('typedi', () => {
  const actual = jest.requireActual('typedi');
  return {
    ...actual,
    Container: {
      get: jest.fn(),
    },
  };
});

const mockContainer = mocked(Container);

describe('UsersController', () => {
  let controller: UsersController;
  let service: Partial<UsersService> = {
    createUser: jest.fn(),
    getMongoUser: jest.fn(),
  };

  beforeEach(() => {
    controller = new UsersController();
    mockContainer.get.mockReturnValue(service);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createUser', () => {
    it('should call service to create user', async () => {
      await controller.createUser(WrapExpressRequest({body: CreateUserInput}), ExpressResponse());
      expect(service.createUser).toHaveBeenCalledWith(CreateUserInput);
    });
  });

  describe('getMongoUser', () => {
    it('should call service to create user', async () => {
      await controller.getMongoUser(WrapExpressRequest({params: { id: 'id' }}), ExpressResponse());
      expect(service.getMongoUser).toHaveBeenCalledWith('id');
    });
  });
});