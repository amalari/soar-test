import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setupChart } from './lib/setupChart'
import { setupDb } from './lib/setupDb.ts'
import { setupMocking } from './lib/setupMocking.ts'

setupChart()
setupDb()
setupMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
