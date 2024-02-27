import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/createSlice";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        status:'idle',
    },
    reducers:{

    }
});

export default userSlice.reducer;