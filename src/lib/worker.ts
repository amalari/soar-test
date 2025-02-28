import { setupWorker } from 'msw/browser'
import { userHandlers } from '../modules/user/__mock__/userHandler'

export const worker = setupWorker(...userHandlers)