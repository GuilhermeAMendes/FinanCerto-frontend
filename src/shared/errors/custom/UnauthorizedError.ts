// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class UnauthorizedError extends ApplicationError {
  constructor(message = "Unauthorized") {
    super(message, ERROR_CODE.unauthorized);
    this.name = "UnauthorizedError";
  }
}
