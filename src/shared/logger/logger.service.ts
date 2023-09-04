import { Logger, createLogger, format, transports } from 'winston';

export class AppLogger {
  private context?: string;
  private logger: Logger;

  public setContext(context: string): void {
    this.context = context;
  }

  constructor() {
    this.logger = createLogger({
      level: 'info', // 分级 后面应该放到环境变量里面去
      format: format.combine(format.timestamp(), format.prettyPrint()),
      transports: [
        new transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new transports.File({
          filename: 'logs/combined.log',
        }),
        new transports.Console(),
      ],
    });
  }

  error(ctx: any, message: string, meta?: Record<string, any>): Logger {
    return this.logger.error({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  warn(ctx: any, message: string, meta?: Record<string, any>): Logger {
    return this.logger.warn({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  debug(ctx: any, message: string, meta?: Record<string, any>): Logger {
    return this.logger.debug({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }
}
