import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cityName: '',
    shopName: '',
    cartProducts: [],
    costDelivery: 0,
    totalCost: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCityName(state, action) {
            state.cityName = action.payload
        },
        setShopName(state, action) {
            state.shopName = action.payload
        },
        setCostDelivery(state, action) {
            state.costDelivery = action.payload
        },
        addProduct(state, action) {
            state.cartProducts = [...state.cartProducts, action.payload]
        },
        incrementProduct(state, action) {
            state.cartProducts = state.cartProducts.map((item, idx) => {
                if (action.payload === idx) {
                    return {
                        ...item,
                        price: item.price + item.oneProductPrice,
                        length: item.length + 1
                    }
                }
                return item
            })
        },
        decrementProduct(state, action) {
            state.cartProducts = state.cartProducts.map((item, idx) => {
                if (action.payload === idx && item.length > 1) {
                    return {
                        ...item,
                        price: item.price - item.oneProductPrice,
                        length: item.length - 1
                    }
                }
                return item
            })
        },
        removeProduct(state, action) {
            let price = 0
            state.cartProducts.map((item, idx) => {
                if (action.payload === idx) {
                    price = item.price
                }
                return price
            })
            state.totalCost = state.totalCost - price
            state.cartProducts = state.cartProducts.filter((item, index) => index !== action.payload)
        },
        setTotalCost(state) {
            let total = 0
            if (state.cartProducts.length) {
                state.cartProducts.map(({price, length}) => total += Number(price))
                state.totalCost = total + state.costDelivery
            } else {
                state.totalCost = 0
            }

        },
        clearCartState() {
            return initialState;
        }
    },

})

export const {
    setCityName,
    setShopName,
    addProduct,
    removeProduct,
    setCostDelivery,
    clearCartState,
    setTotalCost,
    incrementProduct,
    decrementProduct
} = cartSlice.actions

export default cartSlice.reducer