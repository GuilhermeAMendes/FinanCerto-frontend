// External Library
import { jwtDecode } from "jwt-decode";

// Types
import type { JWTClaims } from "../types";

export const decodeToken = (tokenEntry: string): JWTClaims => {
  return jwtDecode<JWTClaims>(tokenEntry);
};

export const isValidToken = (tokenEntry: JWTClaims): boolean => {
  return tokenEntry.exp * 1000 > Date.now();
};
