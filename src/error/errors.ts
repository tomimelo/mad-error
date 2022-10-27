import { MadError } from './mad-error/mad-error'

export class ValidationError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'ValidationError'
    this.code('INVALID_DATA')
  }
}

export class BusinessError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'BusinessError'
    this.code('BUSINESS_ERROR')
  }
}

export class BadRequestError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'BadRequestError'
    this.code('BAD_REQUEST')
    this.status(400)
  }
}

export class UnauthorizedError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'UnauthorizedError'
    this.code('UNAUTHORIZED')
    this.status(401)
  }
}

export class NotFoundError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'NotFoundError'
    this.code('NOT_FOUND')
    this.status(404)
  }
}
