import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMe } from "../../user/hooks/useMe"

export const useTransfer = () => {
  const queryClient = useQueryClient()
  const { data: me } = useMe()
  return useMutation({
    mutationFn: async (data: { amount: number, targetUserId: number }) => {
      const response = await fetch('/api/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, userId: me!.id })
      })
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-balance'] })
      queryClient.invalidateQueries({ queryKey: ['recent-transactions'] })
    }
  })
}