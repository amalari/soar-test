import Dexie, { EntityTable } from "dexie";
import { User } from "../modules/user/domain/user";
import { userDbSchema } from "../modules/user/__mock__/userDbSchema";
import { balanceDbSchema, balanceCardDbSchema } from "../modules/balance/__mock__/balanceDbSchema";
import { Balance, BalanceCard } from "../modules/balance/domain/balance";

const db = new Dexie('SoarTest') as Dexie & {
  users: EntityTable<User, 'id'>,
  balances: EntityTable<Balance, 'id'>,
  balanceCards: EntityTable<BalanceCard, 'id'>,
};

db.version(1).stores({
  users: userDbSchema,
  balances: balanceDbSchema,
  balanceCards: balanceCardDbSchema
});

export { db }