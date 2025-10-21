import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <App />
  </QueryClientProvider>
)
