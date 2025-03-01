import { date, email, InferInput, minLength, object, pipe, string } from "valibot";
import { passwordRule } from "../../common/validation/passwordRule";

export const userFormSchema = object({
  fullname: pipe(string("required"), minLength(1, 'Your Name must be at least 2 characters long.')),
  username: pipe(string("required"), minLength(1, 'User Name must be at least 2 characters long.')),
  email: pipe(string("required"), email()),
  password: passwordRule,
  birthDate: date("required"),
  presentAddress: pipe(string("required"), minLength(1, 'Present Address must be at least 2 characters long.')),
  permanentAddress: pipe(string("required"), minLength(1, 'Permanent Address must be at least 2 characters long.')),
  city: pipe(string("required"), minLength(1, 'Cityu must be at least 2 characters long.')),
  postalCode: pipe(string("required"), minLength(1, 'Postal Code must be at least 2 characters long.')),
  country: pipe(string("required"), minLength(1, 'Country must be at least 2 characters long.')),
})

export type UserFormSchema = InferInput<typeof userFormSchema>
