import { Container } from 'typedi';

import { UserModel } from '../modules/users/users.model';

export const mongoModelToken = {
  UserModel: 'UserModel',
};

export default () => {
  const modelPool = {
    UserModel: UserModel,
  };

  for (const [token, model] of Object.entries(modelPool)) {
    Container.set(token, model);
  }
};