// External Library
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Services
import registerService from "../services/register";
import loginService from "../services/login";

// Type Guard
import { isLeft, type Either } from "@/shared/patterns/either";

// Errors
import { ApplicationError } from "@/shared/errors/base/ApplicationError";

// Utils
import authStorage from "../utils/authStorage";
import { decodeToken, isValidToken } from "../utils/token";

// Types
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "../types";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  isSessionRestored: boolean;
  login: (
    payload: LoginPayload,
  ) => Promise<Either<ApplicationError, LoginResponse>>;
  register: (
    payload: RegisterPayload,
  ) => Promise<Either<ApplicationError, RegisterResponse>>;
  logout: () => void;
  restoredSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    token: null,
    isSessionRestored: false,
    isLoading: false,

    login: async (payload: LoginPayload) => {
      set({ isLoading: true });

      const result = await loginService(payload);

      if (isLeft(result)) {
        set({ isLoading: false });
        return result;
      }

      const { token } = result.value;
      authStorage.setToken(token);

      set({ isLoading: false, token });
      return result;
    },

    register: async (payload: RegisterPayload) => {
      set({ isLoading: true });

      const result = await registerService(payload);

      if (isLeft(result)) {
        set({ isLoading: false });
        return result;
      }

      set({ isLoading: false });
      return result;
    },

    logout: () => {
      authStorage.clear();
      set({ token: null });
    },

    restoredSession: () => {
      let fetchToken = null;

      try {
        const token = authStorage.getToken();

        if (!token) throw new Error("No tokens found");

        const decodedToken = decodeToken(token);

        if (!isValidToken(decodedToken)) {
          authStorage.clear();
          throw new Error("Invalid token");
        }

        fetchToken = token;
      } catch {
        authStorage.clear();
      } finally {
        set({ isSessionRestored: true, token: fetchToken });
      }
    },
  })),
);
