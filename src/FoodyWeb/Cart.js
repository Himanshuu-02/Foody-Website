import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import "../Cart.css"
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const dispatch= useDispatch();
    const cartHandler=()=>{
        dispatch(clearCart())
    }
    const cartItems= useSelector((store)=> store.cart.items)
  return (
    <div className='main-cart'>
        <h1 className='heading-cart' >
            Cart
        </h1>
        <div className='btn-cart'>
            <button  onClick={cartHandler}>Clear Cart</button>

        </div>
        
        {cartItems.length===0 && <h1 className='empty-content'>Cart is empty Please add items :)</h1>}
        <div className='add-items'>
            <ItemList list={cartItems}/>
        </div>
    </div>
  )
}

export default Cart