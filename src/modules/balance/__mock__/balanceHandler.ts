import { http, HttpResponse } from 'msw'
import { db } from '../../../db/db'

export const balanceHandlers = [
  http.get('/api/my-cards', async ({ request }) => {
    const url = new URL(request.url)
    const userId = url.searchParams.get('userId')
    if(!userId) return new HttpResponse(null, { status: 404 })

    const balanceCards = await db.balanceCards.where('userId').equals(Number(userId)).toArray()
    return HttpResponse.json(balanceCards)
  }),
  http.get('/api/my-balance', async ({ request }) => {
    const url = new URL(request.url)
    const userId = url.searchParams.get('userId')
    if(!userId) return new HttpResponse(null, { status: 404 })

    const balance = await db.balances.where('userId').equals(Number(userId)).first()
    return HttpResponse.json(balance)
  }),
]