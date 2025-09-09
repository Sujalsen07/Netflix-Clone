import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import searchReducer from "./searchSlice"
const store = configureStore({
    reducer: {
        app: userReducer,
        movie: movieReducer,
        search:searchReducer,
    }
});
export default store;