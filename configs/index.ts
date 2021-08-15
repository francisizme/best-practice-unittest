import * as dotenv from 'dotenv';

dotenv.config();

export default {
  db: {
    mongodb: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/local_db',
    },
  },
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};