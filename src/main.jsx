import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Delivery from './Components/Delivery/Delivery.jsx'
import StoreContextProvider from './context/StoreContext.jsx';
import Cart from './Components/Cart/Cart.jsx';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='menu' element={<Menu />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='delivery' element={<Delivery />} />
      <Route path='cart' element={<Cart />} />
      <Route path='placeorder' element={<PlaceOrder />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
      <App />
    </StoreContextProvider>
  </StrictMode>,
)
