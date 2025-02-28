import { userData } from "../modules/user/__mock__/userData"
import { db } from "./db"

export const seeder = async () => {
  await db.users.add(userData)
}