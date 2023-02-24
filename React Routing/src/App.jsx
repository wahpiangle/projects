import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Contact from './pages/Help/Contact';
import Faq from './pages/Help/Faq';
import NotFound from './pages/NotFound';

// browser routers should be created this way
const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route includes the root and
    <Route path = "/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>} />
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
