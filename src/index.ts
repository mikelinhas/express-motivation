import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { QUOTES } from './quotes/quotes';

export const HEADER_NAME = 'X-Motivation';

export function motivation(req: Request, res: Response, next: NextFunction): void {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const quote = QUOTES[randomIndex];
  const author = quote.author;
  const sentence = quote.quote;
  res.setHeader(HEADER_NAME, `${sentence} - ${author}`);
  next();
}

export function motivationErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: 'Oh no! Server Error! This is embarrasing... Please find some inspiration in the X-Motivation header.',
  });
}
