// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class ValidationError extends ApplicationError {
  constructor(message = "Validation error") {
    super(message, ERROR_CODE.validation);
    this.name = "ValidationError";
  }
}
