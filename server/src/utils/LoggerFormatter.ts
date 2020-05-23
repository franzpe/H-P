import { Request, Response } from 'express';
import { format } from 'winston';

class LoggerFormatter {
  /**
   * Similar combined format in morgan
   * :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
   */
  static combinedFormat = (err: Error, req: Request, res: Response) => {
    return `${req.ip} - - \"${req.method} ${req.originalUrl} HTTP/${req.httpVersion}\" ${
      (err as any).statusCode || 500
    } - ${req.headers['user-agent']}`;
  };

  static printF = format.printf(info => {
    return JSON.stringify({ timestamp: info.timestamp, level: info.level, message: info.message });
  });
}

export default LoggerFormatter;
