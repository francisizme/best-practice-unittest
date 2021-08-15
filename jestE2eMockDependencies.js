jest.setTimeout(60000);
jest.mock('./src/shared/connections/mongo', () => {
    const actual = jest.requireActual('./src/shared/connections/mongo');
    return {
        ...actual,
        getMongoOptionConnection: jest.fn(),
    };
});