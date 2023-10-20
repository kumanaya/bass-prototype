class AppError {
  public readonly statusCode: number;
  public readonly errorCode: string;
  public readonly message: string;

  constructor(statusCode = 400, errorCode: string, message: string) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export default AppError;
