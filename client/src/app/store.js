import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import inviteReducer from "../features/Invite/inviteSlice";
import goingReducer from "../features/Going/goingSlice";
import notGoingReducer from "../features/notGoing/notGoingSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    invite: inviteReducer,
    going: goingReducer,
    notGoing: notGoingReducer,
  },
});
