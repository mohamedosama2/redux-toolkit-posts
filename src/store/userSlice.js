import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
export const getData = createAsyncThunk("users/getData", async () => {
  const res = await Axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  return res.data;
});
const userSlice = createSlice({
  initialState: {
    info: [],
    status: null,
    list: {
      1: { 0: [], 1: [], 2: [], 3: [], 4: [] },
      2: { 0: [], 1: [], 2: [], 3: [], 4: [] },
      3: { 0: [], 1: [], 2: [], 3: [], 4: [] },
    },
  },
  name: "users",
  reducers: {
    add(state, { payload: { trend, index } }) {
      state.list[trend][index].push(
        "https://www.pngall.com/wp-content/uploads/8/Young-Man-PNG-Image.png"
      );
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.status = "done";
      state.info = payload.map(({ name }) => name);
    },
    [getData.rejected]: (state, action) => {
      state.status = "error";
    },
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});
export const selectUsers = (state) => state.users;
export const selectInfo = (state) => state.users.info;
export const { add } = userSlice.actions;
export default userSlice.reducer;
/*
 state= {
    1: { 0: [], 1: [], 2: [], 3: [], 4: [] },
    2: { 0: [], 1: [], 2: [], 3: [], 4: [] },
    3: { 0: [], 1: [], 2: [], 3: [], 4: [] },
  }
  state[0][2].push(
    "https://www.pngall.com/wp-content/uploads/8/Young-Man-PNG-Image.png"
  );

  */
