import { CustomError } from '../custom-error'

export interface StringifiedMadError {
  name: string,
  message: string,
  status: number,
  code?: string
}

export class MadError extends Error implements CustomError {
  private statusCode: number = 500
  private errorCode: string | undefined
  public constructor (message: string) {
    super(message)
    this.name = 'MadError'
  }

  public status (statusCode: number): MadError {
    this.statusCode = statusCode
    return this
  }

  public code (errorCode: string): MadError {
    this.errorCode = errorCode
    return this
  }

  public toJSON (): StringifiedMadError {
    return {
      name: this.name,
      message: this.message,
      status: this.statusCode,
      ...(!this.isNullish(this.errorCode) && { code: this.errorCode }),
      ...(this.stack && { stack: this.stack })
    }
  }

  private isNullish (value: any): boolean {
    return value === undefined || value === null
  }
}
