import { Container, Inject, Service } from 'typedi';
import { mongoModelToken } from '../../shared/mongoModel';
import { UserModel } from './users.model';
import { IUserCreate, IUserDocument } from './users.interface';

@Service()
export class UsersService {
  @Inject('UserModel') private readonly userModel: typeof UserModel

  async createUser(input: IUserCreate): Promise<string[]> {
    const createdUser = await this.createMongoUser(input);
    return [createdUser.id];
  }

  private async createMongoUser(input: IUserCreate): Promise<IUserDocument> {
    return this.userModel.create(input);
  }

  async getMongoUser(userId: string): Promise<IUserDocument> {
    return this.userModel.findById(userId);
  }
}