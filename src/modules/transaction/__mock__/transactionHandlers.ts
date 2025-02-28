import { http, HttpResponse } from "msw";

import { db } from "../../../db/db";

export const transactionHandlers = [
  http.get('/api/recent-transactions', async () => {
    const recentTransactions = await db.transactions.orderBy("id").reverse().limit(3).toArray()
    return HttpResponse.json(recentTransactions)
  })
]