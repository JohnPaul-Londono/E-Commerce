import axios from 'axios'
import { cart_add_item } from '../reducers/cartReducers/cartSlice'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    const cartItem = {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }
    dispatch(cart_add_item(cartItem))
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}