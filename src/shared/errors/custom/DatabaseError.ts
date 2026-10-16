// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class DatabaseError extends ApplicationError {
  constructor(message = "Database error") {
    super(message, ERROR_CODE.database);
    this.name = "DatabaseError";
  }
}
