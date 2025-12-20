// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state consists of an array of venue objects, each representing a rentable room in the venue. 
 * A venue object has properties such as the thumbnail image, name, cost, and quantity.
 */
export const venueSlice = createSlice({
  name: "venue", //This name will use to generate a action type
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
    
    /**
     * This function handles incrementing the quantity of a venue item in the state. It receives an action containing the index of the item to be incremented.
     * It first checks if the item exists in the state at the provided index. If the item exists and it's an Auditorium Hall with a quantity greater than or equal to 3, it returns early without modifying the state.
     * Otherwise, it increments the quantity of the item by one.
     * 
     * @param {*} state 
     * @param {*} action 
     * @returns 
     */
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
