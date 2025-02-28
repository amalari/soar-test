// import { db } from "../db/db"
import { seeder } from "../db/seeder"

export const setupDb = async () => {
  await seeder()
}