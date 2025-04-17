import logo from './logo.svg';
import './App.css';
import Example from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/footer/footer';   
import Product from './customer/components/product/product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Routes, Route } from'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
// import {ab} from '../'


  


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
        
      </Routes>
      
      
     
    </div>
  );
}

export default App;
