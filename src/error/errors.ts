import { MadError } from './mad-error/mad-error'

export class ValidationError extends MadError {
  public constructor (message: string) {
    super(message)
    this.name = 'ValidationError'
    this.code('INVALID_DATA')
  }
}
