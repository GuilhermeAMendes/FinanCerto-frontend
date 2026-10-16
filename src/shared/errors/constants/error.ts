// Types
import type { ErrorType } from "../types";

export const ERROR_CODE: Record<ErrorType, number> = {
  custom: 400,
  database: 500,
  forbidden: 403,
  network: 503,
  not_found: 404,
  unauthorized: 401,
  validation: 422,
};
