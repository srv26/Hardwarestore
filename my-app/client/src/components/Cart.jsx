function Cart({cart}) { 
   return (
        <div>
            <h>My items below</h>
         { cart.length === 0 ? <p> Your cart is Empty</p> : cart.map(item => {
            return (
            <div key={item.name}>
            <span id = {item.id} > {item.name} - ${item.price}</span>
            </div>
          )})}
        </div>
    )
}

export default Cart;