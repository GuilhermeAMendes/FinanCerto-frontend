import { AxiosClient } from "@/infra/http/axios/axiosClient";
import { isAxiosError } from "axios";
import { type Either, right } from "@/shared/patterns/either";
import { ApplicationError } from "@/shared/errors/base/ApplicationError";
import errorFactory from "@/shared/errors/factory/errorFactory";
import type { RegisterPayload, RegisterResponse } from "../types";

export default async function register(
  payload: RegisterPayload,
): Promise<Either<ApplicationError, RegisterResponse>> {
  try {
    const { data: response } = await AxiosClient.post<RegisterResponse>(
      "/users",
      payload,
    );
    return right(response);
  } catch (error) {
    let message = "Falha ao registrar usuário";

    if (isAxiosError(error)) {
      message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return errorFactory("validation", message);
  }
}
