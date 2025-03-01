import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateUserInput } from "../__mock__/inputs/userInput"
import { useMe } from "./useMe"

export const useUpdateUser = () => {
  const { data: me } = useMe()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateUserInput) => {
      const response = await fetch(`/api/users/${me?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}