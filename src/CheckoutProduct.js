import React from 'react'
import'./CheckoutProduct.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id,title,image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =() =>{
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
    }


    return (
        <div>
            <div className="checkoutProduct">
                <div className="checkoutProduct_image">
                    <img src={image} alt="" />
                </div>
                <div className="checkoutProduct_productInfo">
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        {title}
                    </p>

                    <p>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i)=>(

                    <p>⭐</p>
                    ))}

                </div>
               
                <button onClick={removeFromBasket} className="checkoutProduct_btn">
                    Remove the Item
                </button>
              

                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
