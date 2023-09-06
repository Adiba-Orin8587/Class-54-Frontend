import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import User from './Component/Users/User'
import Update from './Component/Update/Update'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/user')
    },
    {
      path: '/user',
      element: <User></User>
    },

    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
