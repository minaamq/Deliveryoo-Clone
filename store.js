import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import restaurantReducer from "./features/restaurantSlice"


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
})
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch