import React from 'react'
import "./cart.css"

function Cart() {
  return (
    <div>
        <h2>Cart</h2>        
        <div className="cart">
            <img src="images/img1.jpeg" alt="" />
            <div className="info">
                <span className="pric">50$</span>
                <span className='count'>1</span>
            </div>
        </div>
        <div className="cart">
            <img src="images/img1.jpeg" alt="" />
            <div className="info">
                <span className="pric">50$</span>
                <span className='count'>1</span>
            </div>
        </div>
        <div className="cart">
            <img src="images/img1.jpeg" alt="" />
            <div className="info">
                <span className="pric">50$</span>
                <span className='count'>1</span>
            </div>
        </div>
        <div className="cart">
            <img src="images/img1.jpeg" alt="" />
            <div className="info">
                <span className="pric">50$</span>
                <span className='count'>1</span>
            </div>
        </div>
    </div>
  )
}

export default Cart