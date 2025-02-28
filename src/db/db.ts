import Dexie, { EntityTable } from "dexie";
import { User } from "../modules/user/domain/user";
import { userDbSchema } from "../modules/user/__mock__/userDbSchema";

const db = new Dexie('SoarTest') as Dexie & {
  users: EntityTable<User, 'id'>
};

db.version(1).stores({
  users: userDbSchema
});

export { db }