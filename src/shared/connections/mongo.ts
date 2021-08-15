import config from '../../../configs';

export const getMongoOptionConnection = (): Record<string, any> => {
  const uri = config.db.mongodb.uri;

  return {
    uri,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
};