import { http, HttpResponse } from "msw";

import { db } from "../../../db/db";
import { TransferInput, transferInputSchema } from "./inputs/transferInput";
import { safeParse } from "valibot";

export const transactionHandlers = [
  http.get('/api/recent-transactions', async () => {
    const recentTransactions = await db.transactions.orderBy("transactionDate").reverse().limit(3).toArray()
    return HttpResponse.json(recentTransactions)
  }),
  http.post('/api/transfer', async ({ request }) => {
    const newData = await request.json() as TransferInput
    const validation = safeParse(transferInputSchema, newData)
    if(!validation.success){
      const messages = validation.issues.map((issue) => issue.message).join(", ");
      console.error("❌ Validation Error:", messages);
      return HttpResponse.json(messages, { status: 400,  })
    }

    const targetUser = await db.users.get(newData.targetUserId)
    const amount = newData.amount * -1
    await db.transactions.add({
      transferName: targetUser!.fullname,
      transactionDate: new Date(),
      amount,
      type: "transfer",
      targetUserId: newData.targetUserId,
      balanceCardId: 0
    })
    const userBalance = await db.balances.where({ userId: newData.userId }).first()
    await db.balances.update(userBalance!.id, { balance: userBalance!.balance + amount })
    
    return HttpResponse.json({ success: true })
  })
]