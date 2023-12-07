import { configureStore } from "@reduxjs/toolkit";
import imageLoading from "./slices/imageLoading";


export default configureStore({
    reducer: {
        imageLoading
    }
})