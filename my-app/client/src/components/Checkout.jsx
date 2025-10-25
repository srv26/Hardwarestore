import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//const stripe = useStripe();
function Checkout({cart}){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardname, setCardName] = useState('bank');
  const stripe = useStripe();
  const elements = useElements();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const handleSubmit = async() => {
  const response = await fetch('http://localhost:5000/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items: cart, name, email }),
});
console.log('Received from backend:'); // ← Check this in browser console
const { clientSecret } = await response.json();
const result = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement),
    billing_details: { name, email },
  },
});
if(result.paymentIntent.status === 'succeeded'){

    alert('Payment successful!');
}
  }
  const handleChange = (e) => {
   setCardName(e.target.value);
  }
  const handlecheckout = () => {
      alert("order palced");
     }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <select id="payment" value={cardname} onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="credit">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bank">Bank Transfer</option>
      </select>
      <CardElement options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': { color: '#aab7c4' },
        },
        invalid: { color: '#9e2146' },
      },
    }}/>

      
      <p>Total: ${total}</p>
      <button type="submit">Pay</button>
    </form>
  );
}
export default Checkout; 