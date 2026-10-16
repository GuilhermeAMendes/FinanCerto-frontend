// Classes
import { type Either, left } from "../../patterns/either";
import { ApplicationError } from "../base/ApplicationError";
import { DatabaseError } from "../custom/DatabaseError";
import { EntityNotFoundError } from "../custom/EntityNotFoundError";
import { ForbiddenError } from "../custom/ForbiddenErro";
import { NetworkError } from "../custom/NetworkError";
import { UnauthorizedError } from "../custom/UnauthorizedError";
import { ValidationError } from "../custom/ValidationError";

// Types
import type { ErrorType } from "../types";

// Function
export default function errorFactory(
  type: ErrorType,
  message?: string,
  statusCode?: number,
  isOperational?: boolean
): Either<ApplicationError, never> {
  const errorMap: Record<ErrorType, () => ApplicationError> = {
    custom: () =>
      new ApplicationError(
        message ?? "Unknown error",
        statusCode,
        isOperational
      ),
    database: () => new DatabaseError(message),
    forbidden: () => new ForbiddenError(message),
    network: () => new NetworkError(message),
    not_found: () => new EntityNotFoundError(message),
    validation: () => new ValidationError(message),
    unauthorized: () => new UnauthorizedError(message),
  };

  return left(errorMap[type]());
}
