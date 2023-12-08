import { MadError } from './mad-error/mad-error'

export class ValidationError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'ValidationError'
    this.code('INVALID_DATA')
    this.data(data)
  }
}

export class BusinessError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'BusinessError'
    this.code('BUSINESS_ERROR')
    this.data(data)
  }
}

export class NotSupportedError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'NotSupportedError'
    this.code('NOT_SUPPORTED')
    this.data(data)
  }
}

export class BadRequestError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'BadRequestError'
    this.code('BAD_REQUEST')
    this.data(data)
    this.status(400)
  }
}

export class UnauthorizedError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'UnauthorizedError'
    this.code('UNAUTHORIZED')
    this.data(data)
    this.status(401)
  }
}

export class UnauthenticatedError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'UnauthenticatedError'
    this.code('UNAUTHENTICATED')
    this.data(data)
    this.status(401)
  }
}

export class NotFoundError<DATA = unknown> extends MadError {
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'NotFoundError'
    this.code('NOT_FOUND')
    this.data(data)
    this.status(404)
  }
}
