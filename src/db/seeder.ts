import dayjs from "dayjs"
import { userData } from "../modules/user/__mock__/userData"
import { db } from "./db"

export const seeder = async () => {
  try {
    // reset db
    await db.users.clear()
    await db.balances.clear()
    await db.balanceCards.clear()
    await db.transactions.clear()

    const userId = await db.users.add(userData)
    await db.balances.add({
      balance: 5756,
      userId
    })
    const balanceCardId = await db.balanceCards.add({
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778123412341234",
      userId
    })
    await db.users.bulkAdd([{
      birthDate: new Date(),
      fullname: "Charline Reed",
      username: "Charline Reed",
      email: "charlenereed@gmail.com",
      password: "password",
      city: "San Jose",
      postalCode: "45962",
      country: "USA",
      position: "CEO",
      permanentAddress: "San Jose, California, USA",
      presentAddress: "San Jose, California, USA",
      profilePicture: "/target-user-1.jpg"
    }, {
      birthDate: new Date(),
      fullname: "Randy Press",
      username: "Randy Press",
      email: "randypress@gmail.com",
      password: "password",
      city: "San Jose",
      postalCode: "45962",
      country: "USA",
      position: "Director",
      permanentAddress: "San Jose, California, USA",
      presentAddress: "San Jose, California, USA",
      profilePicture: "/target-user-2.jpg"
    }, {
      birthDate: new Date(),
      fullname: "Workman",
      username: "Workman",
      email: "workman@gmail.com",
      password: "password",
      city: "San Jose",
      postalCode: "45962",
      country: "USA",
      position: "Designer",
      permanentAddress: "San Jose, California, USA",
      presentAddress: "San Jose, California, USA",
      profilePicture: "/target-user-3.jpg"
    }, {
      birthDate: new Date(),
      fullname: "Workman",
      username: "Workman",
      email: "workman@gmail.com",
      password: "password",
      city: "San Jose",
      postalCode: "45962",
      country: "USA",
      position: "Designer",
      permanentAddress: "San Jose, California, USA",
      presentAddress: "San Jose, California, USA",
      profilePicture: "/target-user-2.jpg"
    }])
    await db.transactions.bulkAdd([{
      transferName: "Jemiu Wilson",
      transactionDate: dayjs("2021-01-21").toDate(),
      amount: 5400,
      type: "transfer",
      balanceCardId,
      targetUserId: userId
    }, {
      transferName: "Deposit Paypal",
      transactionDate: dayjs("2021-01-25").toDate(),
      amount: 2500,
      type: "paypal",
      balanceCardId,
      targetUserId: userId
    }, {
      transferName: "Deposit from my Card",
      transactionDate: dayjs("2021-01-28").toDate(),
      amount: -850,
      type: "card-deposit",
      balanceCardId,
      targetUserId: userId
    }])
  } catch (error) {
    console.error({ error })
  }
}