import { useQuery } from "@tanstack/react-query"
import { useMe } from "../../user/hooks/useMe";
import { BalanceResponse } from "../domain/balanceResponse";

const fetchMyBalance = async (userId: number): Promise<BalanceResponse | null> => {
  try {
    const url = new URL("/api/my-balance", window.location.origin)
    url.searchParams.append("userId", String(userId));
  
    const response = await fetch(url.toString());
    return response.json();
  } catch (error) {
    console.error("fetch my balance cards error", error)
    return null
  }
}

export const useMyBalance = () => {
  const { data: me } = useMe()

  return useQuery({
    queryKey: ['my-balance'],
    queryFn: () => fetchMyBalance(me!.id),
    enabled: !!me,
    staleTime: Infinity,
  })
}