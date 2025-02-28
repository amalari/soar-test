import { setupWorker } from 'msw/browser'
import { userHandlers } from '../modules/user/__mock__/userHandler'
import { balanceHandlers } from '../modules/balance/__mock__/balanceHandler'
import { transactionHandlers } from '../modules/transaction/__mock__/transactionHandlers'

export const worker = setupWorker(...userHandlers, ...balanceHandlers, ...transactionHandlers)