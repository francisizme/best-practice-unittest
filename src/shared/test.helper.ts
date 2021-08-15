import { Request, Response } from 'express';

export const ExpressResponse = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
}) as unknown as Response;

export const WrapExpressRequest = (options: {[K in keyof Request]?: any}): Request => {
  return {
    ...options,
  } as unknown as Request;
};
