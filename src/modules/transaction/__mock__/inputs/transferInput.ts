import { InferInput, minValue, number, object, pipe } from "valibot";

export const transferInputSchema = object({
  targetUserId: number('required'),
  userId: number('required'),
  amount: pipe(
    number('required'),
    minValue(0),
  ),
});
export type TransferInput = InferInput<typeof transferInputSchema>;