import { userData } from "../modules/user/__mock__/userData"
import { db } from "./db"

export const seeder = async () => {
  console.log("fewaf")
  try {
    // reset db
    await db.users.clear()
    await db.balances.clear()
    await db.balanceCards.clear()

    const userId = await db.users.add(userData)
    console.log({ userId })
    await db.balances.add({
      balance: 5756,
      userId
    })
    await db.balanceCards.add({
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778123412341234",
      userId
    })
  } catch (error) {
    console.error({ error })
  }
}