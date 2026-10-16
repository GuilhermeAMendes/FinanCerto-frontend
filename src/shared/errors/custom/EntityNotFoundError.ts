// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class EntityNotFoundError extends ApplicationError {
  constructor(message = "Entity not found") {
    super(message, ERROR_CODE.not_found);
    this.name = "EntityNotFoundError";
  }
}
