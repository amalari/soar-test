export interface RecentTransactionsResponse {
  id: number
  transferName?: string
  transactionDate: Date
  amount: number
  type: 'card-deposit' | 'transfer' | 'paypal'
  balanceCardId: number
  targetUserId: number
}