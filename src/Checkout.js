
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
<checkout className="css"></checkout>


function Checkout() {
    const [{basket}, ]= useStateValue();
    return (
        <div className= "checkout">
            <div className="checkout_left">
            <h1 className="checkout_title">Shooping Cart</h1>

                
                {basket.map(item =>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                ))}
                
            {/* {checkoutProduct} */}
            </div>
            <div className="checkout_right">
                 <Subtotal/> 
            </div>
            
        </div>

    )
}

export default Checkout

