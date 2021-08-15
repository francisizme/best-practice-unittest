import { getMongoOptionConnection } from './mongo';
import mongoose from 'mongoose';

export default async () => {
  const { uri, ...mongoOpts } = getMongoOptionConnection();
  await mongoose.connect(uri, mongoOpts);
};