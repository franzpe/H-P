import { Router } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';

export const handleCors = (router: Router) => {
  router.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
};

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

export const handleCookieParsing = (router: Router) => {
  router.use(cookieParser());
};
