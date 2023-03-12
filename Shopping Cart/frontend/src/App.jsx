import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
