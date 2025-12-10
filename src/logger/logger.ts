import * as winston from 'winston';
import colors from '@colors/colors';

import dotenv from 'dotenv';
dotenv.config({ path : './env/.env' });

// Define the custom log format
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  let coloredLevel = message;
    switch (level) {
      case 'info':
        coloredLevel = colors.green(level);
        break;
      case 'warn':
        coloredLevel = colors.yellow(level);
        break;
      case 'error':
        coloredLevel = colors.red(level);
        break;
      default:
        coloredLevel = level;
    }
    return `[${timestamp}] ${coloredLevel}: ${message}`;
  });

// Create the logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

// Export the logger
export default logger;    