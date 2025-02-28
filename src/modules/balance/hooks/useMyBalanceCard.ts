import { useQuery } from "@tanstack/react-query"
import { useMe } from "../../user/hooks/useMe";
import { BalanceCardResponse } from "../domain/balanceResponse";

const fetchMyBalance = async (userId: number): Promise<BalanceCardResponse[] | null> => {
  try {
    const url = new URL("/api/my-cards", window.location.origin)
    url.searchParams.append("userId", String(userId));
  
    const response = await fetch(url.toString());
    return response.json();
  } catch (error) {
    console.error("fetch my balance cards error", error)
    return null
  }
}

export const useMyBalanceCards = () => {
  const { data: me } = useMe()

  return useQuery({
    queryKey: ['my-balance-cards'],
    queryFn: () => fetchMyBalance(me!.id),
    enabled: !!me,
    staleTime: Infinity,
  })
}