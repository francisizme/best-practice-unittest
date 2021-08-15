import { Document, Schema, model } from 'mongoose';
import { IUser } from './users.interface';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export type UserDocument = IUser & Document;
export type UserORM = UserORMClass;
export const UserSchema = new Schema<IUser>({
  username: String,
  full_name: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export const UserModel = model<UserDocument>('User', UserSchema);

@Entity()
export class UserORMClass {
  @PrimaryGeneratedColumn()
  id: string;
  @Column('varchar')
  username: string;
  @Column('varchar')
  full_name: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}