export interface Transaction {
  id: number
  transferName?: string
  transactionDate: Date
  amount: number
  type: 'card-deposit' | 'transfer' | 'paypal'
  balanceCardId: number
  targetUserId: number
}