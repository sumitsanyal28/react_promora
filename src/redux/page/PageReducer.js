

import { NAVIGATE_ABOUTPAGE, NAVIGATE_CONTACTPAGE,  NAVIGATE_HOMEPAGE, NAVIGATE_SCHOOL} from "./PageTypes";

const initialState={
    page:'LandingPage'
};
const PageReducer=( state=initialState ,action)=>{
    switch(action.type){
        case NAVIGATE_ABOUTPAGE:return{
            ...state,
            page:'AboutPage'
        
        }
        case NAVIGATE_CONTACTPAGE:return{
            ...state,
            page:'ContactPage'
        
        }
        case NAVIGATE_HOMEPAGE:return{
            ...state,
            page:'LandingPage'
        
        }
        case NAVIGATE_SCHOOL:return{
            ...state,
            page:'School'
        
        }

        default:return state
    }
}
export default PageReducer;