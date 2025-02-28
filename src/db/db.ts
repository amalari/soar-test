import Dexie, { EntityTable } from "dexie";
import { User } from "../modules/user/domain/user";
import { userDbSchema } from "../modules/user/__mock__/userDbSchema";
import { balanceDbSchema, balanceCardDbSchema } from "../modules/balance/__mock__/balanceDbSchema";
import { Balance, BalanceCard } from "../modules/balance/domain/balance";
import { Transaction } from "../modules/transaction/domain/transaction";
import { transactionDbSchema } from "../modules/transaction/__mock__/transactionDbSchema";

const db = new Dexie('SoarTest') as Dexie & {
  users: EntityTable<User, 'id'>,
  balances: EntityTable<Balance, 'id'>,
  balanceCards: EntityTable<BalanceCard, 'id'>,
  transactions: EntityTable<Transaction, 'id'>,
};

db.version(1).stores({
  users: userDbSchema,
  balances: balanceDbSchema,
  balanceCards: balanceCardDbSchema,
  transactions: transactionDbSchema
});

export { db }