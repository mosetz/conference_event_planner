import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        image: "https://pixabay.com/photos/technology-projector-film-7007329/",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        image: "https://pixabay.com/photos/bluetooth-speaker-bedroom-music-4311748/",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        image: "https://pixabay.com/photos/audio-microphone-1844798/",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        image: "https://pixabay.com/photos/table-chair-whiteboard-interior-8429665/",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        image: "https://pixabay.com/photos/christmas-day-furniture-wooden-2597781/",
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
