import { createLogger, format, transports } from 'winston'

const { combine, printf, timestamp } = format

const myFormat = printf(
  ({ level, message }: { level: string; message: string }) =>
    `${level}: ${JSON.stringify(message)}`,
)

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), myFormat),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new transports.File({ filename: './logs/combined.log' }),
  ],
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(timestamp(), myFormat),
    }),
  )
}

export default logger
