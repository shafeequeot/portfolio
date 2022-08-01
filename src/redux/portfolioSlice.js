import { createSlice } from "@reduxjs/toolkit";
import allprojects from '../components/SingComp/projects'

const filterProjects = allprojects.frameWorks.filter(function(el){
    if (el.tag.includes('React js')) return el
})

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        value: {
            filterProjects
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