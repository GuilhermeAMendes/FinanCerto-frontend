export const hasUppercase = (value: string): boolean => /[A-Z]/.test(value);

export const hasNumber = (value: string): boolean => /[0-9]/.test(value);

export const hasSpecialCharacter = (value: string): boolean =>
  /[!@#$%^&*(),.?":{}|<>_+\-=\]\\;`~]/.test(value);

export const hasWhiteSpace = (value: string): boolean => /\s/.test(value);

export const hasSizeWithinValidRange = (
  value: string,
  min: number,
  max: number
): boolean => value.length >= min && value.length <= max;

export const hasSQLInjectionChars = (value: string): boolean => {
  const pattern =
    /('|--|;|\/\*|\*\/|xp_|exec|select|insert|update|delete|drop|union)/i;
  return pattern.test(value);
};
