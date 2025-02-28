import { useQuery } from "@tanstack/react-query"
import { UserResponse } from "../domain/userResponse"

const fetchUsers = async (): Promise<UserResponse[]> => {
  const response = await fetch('/api/users')
  return response.json()
}
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: Infinity,
  })
}