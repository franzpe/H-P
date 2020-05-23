import winston from 'winston';
import 'winston-daily-rotate-file';
import winstonOptions from '../config/winston';

class Logger {
  private _instance: winston.Logger;

  constructor() {
    this._instance = winston.createLogger(winstonOptions);
  }

  info = (message: string) => {
    this._instance.info(message);
  };

  error = (message: string) => {
    this._instance.error(message);
  };

  /**
   * Write stream for morgana
   */
  write = (message: string) => {
    this._instance.info(message);
  };
}

const logger = new Logger();

export default logger;
