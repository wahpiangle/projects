import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About'
import Cart from './components/Cart'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound/NotFound'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
