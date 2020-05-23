import { Router } from 'express';
import morgan from 'morgan';
import logger from '../utils/Logger';

export const handleHTTPLogging = (router: Router) => {
  router.use(morgan('combined', { stream: logger }));
};
