import { CustomError } from '../custom-error'

export interface MadErrorObject<DATA = unknown> {
  name: string,
  message: string,
  status: number,
  data?: DATA
  code?: string
}

export class MadError<DATA = unknown> extends Error implements CustomError {
  private statusCode: number = 500
  private errorCode: string | undefined
  private errorData: DATA | undefined
  public constructor (message: string, data?: DATA) {
    super(message)
    this.name = 'MadError'
    this.errorData = data
  }

  public status (statusCode: number): MadError<DATA> {
    this.statusCode = statusCode
    return this
  }

  public code (errorCode: string): MadError<DATA> {
    this.errorCode = errorCode
    return this
  }

  public data (data: DATA): MadError<DATA> {
    this.errorData = data
    return this
  }

  public toJSON (): MadErrorObject<DATA> {
    return {
      name: this.name,
      message: this.message,
      status: this.statusCode,
      ...(!this.isNullish(this.errorCode) && { code: this.errorCode }),
      ...(!this.isNullish(this.errorData) && { data: this.errorData }),
      ...(this.stack && { stack: this.stack })
    }
  }

  private isNullish (value: any): value is undefined | null {
    return value === undefined || value === null
  }
}
