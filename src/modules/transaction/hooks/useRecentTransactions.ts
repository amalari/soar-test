import { useQuery } from "@tanstack/react-query"
import { RecentTransactionsResponse } from "../domain/recentTransactionsResponse"

const fetchRecentTransactions = async (): Promise<RecentTransactionsResponse[]> => {
  const response = await fetch('/api/recent-transactions')
  return response.json()
}
export const useRecentTransactions = () => {
  return useQuery({
    queryKey: ['recent-transactions'],
    queryFn: fetchRecentTransactions,
    staleTime: Infinity,
  })
}