import { http, HttpResponse } from 'msw'
import { db } from '../../../db/db'

export const userHandlers = [
  http.get('/api/me', async () => {
    const me = await db.users.orderBy("id").first()
    return HttpResponse.json(me)
  }),
  http.get('/api/users', async () => {
    const users = await db.users.toArray()
    return HttpResponse.json(users)
  }),
]