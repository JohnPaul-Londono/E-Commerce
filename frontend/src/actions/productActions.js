import axios from "axios"
import { products_request, products_success, products_fail } from "../reducers/productReducers/productsSlice.js"
import { product_details_fail, product_details_request, product_details_success } from "../reducers/productReducers/productDetailSlice.js"

export const listProducts = () => async (dispatch) => {
    try {
        dispatch(products_request())
        const { data } = await axios.get('/api/products')
        dispatch(products_success(data))
    } catch (err) {
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(products_fail(error))
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(product_details_request())
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch(product_details_success(data))
    } catch (err) {
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(product_details_fail(error))
    }
}