import { seeder } from "../db/seeder"

export const setupDb = async () => {
  if(import.meta.env.VITE_RUN_SEEDER === 'false') return

  await seeder()
}