import initConnection from './connections';
import configMongoModelsContainer from './mongoModel';

export const prerequisite = async () => {
  await initConnection();
  configMongoModelsContainer();
};