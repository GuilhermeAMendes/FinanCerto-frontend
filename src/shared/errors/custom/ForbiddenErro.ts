// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class ForbiddenError extends ApplicationError {
  constructor(message = "Forbidden") {
    super(message, ERROR_CODE.forbidden);
    this.name = "ForbiddenError";
  }
}
