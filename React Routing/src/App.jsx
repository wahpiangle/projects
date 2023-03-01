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
import Contact, { contactAction } from './pages/Help/Contact';
import Faq from './pages/Help/Faq';
import NotFound from './pages/NotFound';
import CareersLayout from './layouts/CareersLayout';
import Careers, { careersLoader } from './pages/Careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/Careers/CareerDetails';
import CareerError from './pages/Careers/CareerError';

// browser routers should be created this way
const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route includes the root and
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />}errorElement={<CareerError/>}
        >
        <Route
          index
          element={<Careers />}
          /* loader here is an api call to the json file server, function is defined in Careers file*/
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader= {careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
