import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket}, ]= useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (

                    <>
                        <p>
                            Subtotal({basket.length} items):<strong>{value} </strong>
                        </p>
                        <small>
                        <input type="checkbox" />This order contains gift
                        </small>
                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button className="subtotalBtn">Proceed to Chechkout</button>
        </div>
    )
}

export default Subtotal