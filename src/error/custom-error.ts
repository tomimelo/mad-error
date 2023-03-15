export interface CustomError {
  status(statusCode: number): CustomError
  code(errorCode: string): CustomError
  data(data: unknown): CustomError
  toJSON(): object
}
