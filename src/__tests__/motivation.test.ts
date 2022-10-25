import { HEADER_NAME, motivation, motivationErrorHandler } from '../index';
import * as express from 'express';
import * as request from 'supertest';
import { Request, Response, Express, NextFunction } from 'express-serve-static-core';

function createServer() {
  const app = express();
  app.use(motivation);
  app.get('/error', (req: Request, res: Response, next: NextFunction) => {
    next(new Error('Oh no an error!!!'));
  });
  app.use(motivationErrorHandler);
  return app;
}

let server: Express;

beforeAll(async () => {
  server = createServer();
});

describe('Motivation Handler', () => {
  test('It adds a header to the response object', async () => {
    const response = await request(server).get('/');
    const headerName = HEADER_NAME.toLowerCase();
    expect(response.headers[headerName]).not.toBeUndefined();
  });
  test('It responds with a nice error message.', async () => {
    const response = await request(server).get('/error');
    const headerName = HEADER_NAME.toLowerCase();
    expect(response.statusCode).toBe(500);
    expect(response.body.message).not.toBeUndefined();
    expect(response.headers[headerName]).not.toBeUndefined();
  });
});
