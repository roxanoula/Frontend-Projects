import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

function Cart() {
    const BTN_DEFAULT = "Place Order"
    const BTN_ORDER = "Ordering..."
    const [buttonText, setButtonText] = useState(BTN_DEFAULT)
    const {cartItems, removeImageFromCart} = useContext(Context)
    const isDisabled = (cartItems.length === 0)
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        
        console.log("Placing the order")
        setButtonText(BTN_ORDER)

        setTimeout( () => {
            console.log("Order placed")
            setButtonText(BTN_DEFAULT)
            cartItems.map(item => {
                removeImageFromCart(item.id)
        })
        }, 3000)

    }

    return (
        <main className="cart-page">
            <h1> Checkout </h1>
            {cartItemElements}
            <p className="total-cost"> Total: {totalCostDisplay} </p>
            <div className="order-button">
                <button onClick={placeOrder} disabled={isDisabled} > {buttonText} </button>
            </div>
            
        </main>
    )
}

export default Cart