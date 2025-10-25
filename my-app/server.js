
const express = require('express');
const mongoose = require('mongoose');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Order = mongoose.model('Order', new mongoose.Schema({
    name : String,
    email:String,
    items:Array,
    Total:Number
}));
app.post('/create-payment-intent', async (req, res) => {
//   try 
//   {
//   const { items, name,  email } = req.body;
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100;
//   const order= new Order({name, email, items,total});
//   try {
//   await order.save();
//   console.log('Order saved!');
// } catch (err) {
//   console.error('Error saving order:', err.message)
// }

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: 'usd',
//     metadata: { name, email },
//   });

//   res.send({ clientSecret: paymentIntent.client_secret });
// } catch(err){
//   console.log("Alert")
// }
 res.send({ clientSecret: "Sourav" });
console.log("Sourav")
});
app.listen(5000, () => console.log('Server running on port 5000'));