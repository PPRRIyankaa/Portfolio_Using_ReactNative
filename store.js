import { configureStore } from "@reduxjs/toolkit";
import Index from "./Reducer/Index";
import NavbarHeading from "./Reducer/NavbarComponent";

export default store = configureStore({
    reducer:{
        navbar:NavbarHeading,   
        crousal:Index
    }
})