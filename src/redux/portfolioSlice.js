import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        value: {
            name:"", 
            description: '', 
            photo: ""
        }
    },

    reducers:{
        changeItem: (state, action) =>{
            state.value = action.payload

        }
    }
})

export const {changeItem} = portfolioSlice.actions
export default portfolioSlice.reducer