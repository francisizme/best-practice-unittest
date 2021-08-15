import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { UserORMClass } from './users.model';


export class UsersRepository extends Repository<UserORMClass> {

}