import { RouterProvider } from 'react-router-dom'
import './css/App.css'
import router from './routes/Router.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
