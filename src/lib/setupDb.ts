import { db } from "../db/db"
import { seeder } from "../db/seeder"

export const setupDb = async () => {
  if(import.meta.env.DEV) return
  
  await db.users.clear()
  await seeder()
}