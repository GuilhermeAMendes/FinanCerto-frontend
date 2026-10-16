// Constants
const TOKEN_KEY = "@aura:token";

const setToken = (value: string): void => {
  localStorage.setItem(TOKEN_KEY, value);
};

const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

const clear = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const authStorage = {
  setToken,
  getToken,
  clear,
};

export default authStorage;
