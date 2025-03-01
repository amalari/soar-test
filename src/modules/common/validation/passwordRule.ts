import { maxLength, minLength, pipe, regex, string } from "valibot";

export const passwordRule = pipe(
  string("required"),
  minLength(8, 'Password must be at least 8 characters long.'),
  maxLength(100, 'Password must be at most 100 characters long.'),
  regex(/[A-Z]/, 'Password must contain at least one uppercase letter.'),
  regex(/[a-z]/, 'Password must contain at least one lowercase letter.'),
  regex(/[0-9]/, 'Password must contain at least one number.'),
);