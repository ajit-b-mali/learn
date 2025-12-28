import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/home/HomePage"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import OrdersPage from "./pages/orders/OrdersPage"
import TrackingPage from "./pages/tracking/TrackingPage"

import './App.css'
import { useEffect, useState } from "react"
import fetchData from "./utils/fetchData"

function App() {
  const [cart, setCart] = useState([]);

  async function loadCart() {
    fetchData(setCart, "/api/cart-items?expand=product");
  }

  useEffect(() => {loadCart()}, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App
