import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

//product
import { productsSlice } from './reducers/productReducers/productsSlice'
import { productDetailSlice } from './reducers/productReducers/productDetailSlice'
//cart
import  {cartSlice}  from './reducers/cartReducers/cartSlice'

const middleware = [thunk]

const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        productDetails: productDetailSlice.reducer,
        cart: cartSlice.reducer
    },
    preloadedState: {},
    middleware,

})

export default store