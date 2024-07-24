import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
       state.splice(action.payload,1);
    },
    
    removeUser(state, action) {
      return []
    },
  },
});

export const { addUser, removeUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
