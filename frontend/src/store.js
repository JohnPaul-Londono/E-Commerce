import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productsSlice } from './reducers/productReducers/productsSlice'
import { productDetailSlice } from './reducers/productReducers/productDetailSlice'

const middleware = [thunk]

const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        productDetails: productDetailSlice.reducer
    },
    preloadedState: {},
    middleware

})

export default store