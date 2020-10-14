import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    user: {},
  },
  reducers: {
    randomUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { randomUser, goingUser, notGoingUser } = inviteSlice.actions;

export const getInvite = () => (dispatch) => {
  axios.get("/api").then((resp) => {
    console.log(resp.data, "x");
    dispatch(randomUser(resp.data));
  });
};

export const addGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", { ...user, going: true }).then((resp) => {
    dispatch(getInvite());
  });
};

export const addNotGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", { ...user, going: false }).then((resp) => {
    console.log(resp.data, "x");
    dispatch(getInvite());
  });
};

export const selectInvite = (state) => state.invite.user;

export default inviteSlice.reducer;
