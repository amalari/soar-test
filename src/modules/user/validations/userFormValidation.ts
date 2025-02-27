import { date, email, InferInput, object, pipe, string } from "valibot";
import { passwordRule } from "../../common/validation/passwordRule";

export const userFormSchema = object({
  fullname: string("required"),
  username: string("required"),
  email: pipe(string("required"), email()),
  password: passwordRule,
  birthDate: date("required"),
  presentAddress: string("required"),
  permanentAddress: string("required"),
  city: string("required"),
  postalCode: string("required"),
  country: string("required"),
})

export type UserFormSchema = InferInput<typeof userFormSchema>
