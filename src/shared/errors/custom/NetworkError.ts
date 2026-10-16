// Class
import { ApplicationError } from "../base/ApplicationError";

// Constants
import { ERROR_CODE } from "../constants/error";

export class NetworkError extends ApplicationError {
  constructor(message = "Network error") {
    super(message, ERROR_CODE.network);
    this.name = "NetworkError";
  }
}
