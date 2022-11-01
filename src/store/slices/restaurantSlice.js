import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: true,
    price: '',
    shopName: ''
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        changeStatusShop(state, action) {
            //    ЛЕГЧЕ ПОЛУЧАТЬ ДАННЫЕ С БД ОТКРЫТ МАГАЗИН ИЛИ ЗАКРЫТ
        },
        setPrice(state, action) {
            state.price = action.payload
        },
        setName(state, action) {
            state.shopName = action.payload
        },
        clearRestaurantState() {
            return initialState;
        }
    }
})

export const {changeStatusShop, setPrice, setName, clearRestaurantState} = restaurantSlice.actions

export default restaurantSlice.reducer