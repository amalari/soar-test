import { http, HttpResponse } from 'msw'
import { safeParse } from 'valibot'

import { db } from '../../../db/db'
import { UpdateUserInput, updateUserInputSchema } from './inputs/userInput'

export const userHandlers = [
  http.get('/api/me', async () => {
    const me = await db.users.orderBy("id").first()
    const result = {...me}
    delete result.password
    return HttpResponse.json(result)
  }),
  http.get('/api/users', async () => {
    const users = await db.users.toArray()
    return HttpResponse.json(users.map(user => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...item } = user
      return item
    }))
  }),
  http.put('/api/users/:id', async ({ params, request }) => {
    try {
      console.log({ params })
      if(!params['id']){
        throw new Error("User ID is required.")
      }
      const userId = Number(params['id'] as string)
      const newData = await request.json() as UpdateUserInput
      const validation = safeParse(updateUserInputSchema, newData)
      if(!validation.success){
        console.log({ issues: validation.issues })
        const messages = validation.issues.map((issue) => issue.message).join(", ");
        throw new Error(messages)
      }

      await db.users.update(userId, {
        ...newData,
        birthDate: new Date(newData.birthDate),
      })
      return HttpResponse.json({ success: true })
    } catch (error: any) {
      console.error("❌ Validation Error:", error.message);
      return HttpResponse.json(error.message, { status: 400,  })
    }
  }),
]