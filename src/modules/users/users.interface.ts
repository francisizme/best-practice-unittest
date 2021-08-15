import { UserDocument } from './users.model';

export interface IUser {
  username: string;
  full_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreate {
  username: string;
  full_name: string;
}

export interface IUserDocument extends UserDocument {}