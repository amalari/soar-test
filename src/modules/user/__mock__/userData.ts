import dayjs from "dayjs";
import { UserFormSchema } from "../validations/userFormValidation";

export const userData: UserFormSchema = {
  fullname: 'Charlene Reed',
  username: 'Charlene Reed',
  email: 'charlenereed@gmail.com',
  password: 'password',
  birthDate: dayjs("1990-02-25").toDate(),
  presentAddress: 'San Jose, California, USA',
  permanentAddress: 'San Jose, California, USA',
  city: 'San Jose',
  postalCode: '45962',
  country: 'USA'
}