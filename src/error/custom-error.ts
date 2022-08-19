export interface CustomError {
  status(statusCode: number): CustomError
  code(errorCode: string): CustomError
  toJSON(): object
}
