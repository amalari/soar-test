export interface Balance {
  id: number
  balance: number
  userId: number
}

export interface BalanceCard {
  id: number
  cardHolder: string
  validThru: string
  cardNumber: string
  userId: number
}