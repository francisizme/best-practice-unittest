import { getMongoOptionConnection } from '../src/shared/connections/mongo';
import { mocked } from 'ts-jest/dist/utils/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import supertest, { SuperAgentTest } from 'supertest';
import { prerequisite } from '../src/shared/prerequiste';
import router from '../src/modules';
import { CreateUserInput } from '../src/modules/users/__tests__/users.mock';
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const mockMongoOptionConnection = mocked(getMongoOptionConnection);

describe('Users API', () => {
  let db: MongoMemoryServer;
  let agent: SuperAgentTest;
  let app: Express;

  beforeAll(async () => {
    db = await MongoMemoryServer.create();
    const uri = db.getUri();
    mockMongoOptionConnection.mockImplementation(() => ({
      uri,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }));
    await prerequisite();
    app = express();
    app.use(cors());
    app.use(express.json());
    app.use(router());

    agent = supertest.agent(app);
  });

  afterAll(async () => {
    if (db) {
      await mongoose.connection.close();
      await db.stop();
    }
    jest.resetAllMocks();
  });

  describe('/users', () => {
    it('should create user', async () => {
      let userId;
      await agent
        .post('/users')
        .send(CreateUserInput)
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.status).toEqual(201);
          userId = res.body[0];
        });

      await agent
        .get('/users/mongo/' + userId)
        .expect(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual(expect.objectContaining(CreateUserInput));
        });
    });
  });
});