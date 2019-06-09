import * as log4js from 'log4js';
import { loggerOptions } from '../config';

const option = {
  appenders: {
    dateFile: {
      type: 'dateFile',
      category: 'http',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 5242880,
      numBackups: 3,
      encoding: 'utf-8',
      filename: loggerOptions.file || 'logs/logFile'
    },
    out: {
      type: 'console',
      category: 'console'
    }
  },
  replaceConsole: true,
  categories: {
    default: {
      appenders: ['dateFile', 'out'],
      level: loggerOptions.level
    }
  }
};

log4js.configure(option);
Object.freeze(log4js);

export default name => {
  const title = loggerOptions.title;
  const logger = log4js.getLogger(`${title} ` + name);
  logger.level = process.env.NODE_ENV === 'test' ? 'off' : loggerOptions.level;
  return logger;
};
