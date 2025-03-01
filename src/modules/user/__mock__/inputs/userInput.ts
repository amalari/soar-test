import { InferInput, object, optional, string } from "valibot";
import { userFormSchema } from "../../validations/userFormValidation";

export const updateUserInputSchema = object({
  ...userFormSchema.entries,
  birthDate: string("required"),
  profilePicture: optional(string()),
});

export type UpdateUserInput = InferInput<typeof updateUserInputSchema>;