import logger from './logger'

export const responseConstructor = (
  statusCode: number,
  message: string,
  data: object,
) => {
  logger.info({
    statusCode,
    message,
    data,
  })
  return {
    statusCode,
    message,
    data,
  }
}

export const errorConstructor = (statusCode, message) => {
  logger.error({
    statusCode,
    message,
  })
  return {
    statusCode,
    message,
  }
}

export class ErrorConstructor {
  errorCode: number
  message: string

  constructor(e: number, m: string) {
    this.errorCode = e
    this.message = m
  }

  construct(): object {
    return {
      e: this.errorCode,
      m: this.message,
    }
  }
}
