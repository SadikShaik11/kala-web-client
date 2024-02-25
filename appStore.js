import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./src/modules/redux-slices/siginIn.jsx"
const appStore = configureStore({
    reducer: {
        signIn: signInSlice
    }
})

export default appStore