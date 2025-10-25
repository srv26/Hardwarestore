import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useState } from 'react';
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51SIUsk2O5wqOFNc9e77LdShMGwXdFV9kLiA1pfzF0a95peWaFvsIZniDku3qOtaYSlWI8RkWcS4yMojm6f7YhZ1e00taXVhDMt');


function App() {
  const [cart, setcart]= useState([]);
   const products = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Mug', price: 10 }
  ];
  const addToCart = (item)=> {
    if(cart.length == 0)
    {
      setcart([...cart,{...item, quantity:1}]);
    } else{
      cart.map(item1=>{
        item1.id === item.id ? setcart([...cart, {...item, quantity:item.quantity+1}]):  setcart([...cart, {...item, quantity:1}])
      })
    }

  };
  return (
    <div className="App">
      <ProductList products={products} addToCart = {addToCart}></ProductList>
      <Cart cart={cart}></Cart>
        <Elements stripe={stripePromise}>
      <Checkout cart={cart}></Checkout>
    </Elements>
    </div>
  );
}

export default App;
