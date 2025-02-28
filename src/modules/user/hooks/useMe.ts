import { useQuery } from "@tanstack/react-query"
import { UserResponse } from "../domain/userResponse"

const fetchMe = async (): Promise<UserResponse> => {
  const response = await fetch('/api/me')
  return response.json()
}
export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    staleTime: Infinity,
  })
}