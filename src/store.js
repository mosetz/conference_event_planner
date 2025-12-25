// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealReducer from './mealsSlice';

/**
 * This code creates a global Redux store 
 * so all components in the application can access the state managed by the venueReducer()
 */
export default configureStore({
    reducer: {
        venue: venueReducer,
        av: avReducer,
        meals: mealReducer
    },
});
