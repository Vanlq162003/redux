import React from 'react';
import { Routes, Route, BrowserRouter   } from 'react-router-dom';
import Home from './clients/Home';
import Client from './layouts/Client';
import Products from './clients/Products';
import Signin from './clients/Signin';
import Register from './clients/Register';
import Checkout from './clients/Checkout';
import NotFoundPage from './clients/NotFoundPage';
import Profile from './clients/Profile';
import ProductDetail from './clients/ProductDetail';

function App() {
  return <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Client />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products/>} />
          <Route path="products/detail" element={< ProductDetail/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="profile" element={<Profile/>} />
          
        </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
