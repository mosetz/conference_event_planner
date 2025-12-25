import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            image: "https://cdn.pixabay.com/photo/2022/02/11/13/16/technology-7007329_1280.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            image: "https://cdn.pixabay.com/photo/2019/07/02/07/39/bluetooth-4311748_1280.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/21/11/32/audio-1844798_1280.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            image: "https://cdn.pixabay.com/photo/2023/12/04/14/58/table-8429665_1280.jpg",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/08/07/00/03/christmas-2597781_1280.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0
        }
    ],


    reducers: {
    /**
     * This function handle incrementing the quantity of av item in the state
     * It then check item exist it increment by 1
     * @param {*} state 
     * @param {*} action 
     */
        incrementAvQuantity: (state, action) => {
            const item = state[action.payload]
            if (item){
                item.quantity++;
            }
        },

        /**
     * This function handle decrementing the qunatity of av item in the state
     * It then if item exist and quantity > 1 it decrement by 1
     * @param {*} state 
     * @param {*} action 
     */
        decrementAvQuantity: (state, action) => {
            const item = state[action.payload]
            if(item && item.quantity > 0){
                item.quantity--;
            }
        },
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
