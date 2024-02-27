import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/configureStore";
import userReducer from './features/userSlice';


export const store = configureStore({
    reducer:{
        user:userReducer,
    }
})