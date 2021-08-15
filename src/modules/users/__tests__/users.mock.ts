import { Types } from 'mongoose';
import { UserModel } from '../users.model';

export const CreateUserInput = {
  username: 'username',
  full_name: 'full_name',
};

export const UserMongoData = new UserModel({
  _id: new Types.ObjectId('6118f38ac927311e95a16fdc'),
  username: "tan",
  full_name: "Tan",
  created_at: new Date(Date.parse("2021-08-15T10:59:22.319Z")),
  updated_at: new Date(Date.parse("2021-08-15T10:59:22.319Z")),
});