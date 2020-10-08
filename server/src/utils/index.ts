import { Router, Request, Response, NextFunction } from 'express';

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router, basePath: string = '') => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](basePath + path, handler);
  }
};

export const tryParseJSON = (json: string) => {
  try {
    const o = JSON.parse(json);
    if (o && typeof o === 'object') {
      return o;
    }
  } catch (e) {
    return false;
  }
};

export const generatePassword = (length: number, an?: 'a' | 'n') => {
  var str = '',
    i = 0,
    min = an == 'a' ? 10 : 0,
    max = an == 'n' ? 10 : 62;
  for (; i++ < length; ) {
    var r = (Math.random() * (max - min) + min) << 0;
    str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
  }

  return str;
};
