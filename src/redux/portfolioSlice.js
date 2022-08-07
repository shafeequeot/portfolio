import { createSlice } from "@reduxjs/toolkit";
import allprojects from '../components/singComp/projects'
let Projects = {}

 Projects.webProjects = allprojects.frameWorks.filter(function(el){
    if (el.tag.includes('React js')) return el
})

Projects.graphicProjects = allprojects.graphicWorks.filter(function(el){
    if (el.tag.includes('Adobe Illustrator')) return el
})

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        value: Projects
    },

    reducers:{
        changeItem: (state, action) =>{
            if(action.payload.filterProjects.type==='webDesign'){

                state.value =  {graphicProjects: state.value.graphicProjects, webProjects: action.payload.filterProjects.item}
            }

            if(action.payload.filterProjects.type==='graphicDesign'){

                state.value =  {webProjects: state.value.webProjects, graphicProjects: action.payload.filterProjects.item}
            }

        }
    }
})

export const {changeItem} = portfolioSlice.actions
export default portfolioSlice.reducer