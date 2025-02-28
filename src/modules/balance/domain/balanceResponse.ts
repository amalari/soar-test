export interface BalanceResponse {
  id: number
  balance: number
  userId: number
}
export interface BalanceCardResponse {
  id: number
  cardHolder: string
  validThru: string
  cardNumber: string
  userId: number
}