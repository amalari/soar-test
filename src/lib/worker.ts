import { setupWorker } from 'msw/browser'
import { userHandlers } from '../modules/user/__mock__/userHandler'
import { balanceHandlers } from '../modules/balance/__mock__/balanceHandler'

export const worker = setupWorker(...userHandlers, ...balanceHandlers)