import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Example from '../customer/components/Navigation/Navigation';
import Footer from '../customer/components/footer/footer';
import Product from '../customer/components/product/product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
 

const CustomerRoutes=()=>{
    return(
        <div>
            <div>
            <Example/>
            </div>
            <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
                
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path=':ab' element={<Product/>}></Route>
                <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            
       {/*<Order/>*/}
       {/*<OrderDetails/>*/}

            </Routes>
            <div>
            <Footer/> 
            </div>
        </div>
    )
}

export default CustomerRoutes;