import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  roleId: number | null;
  pagePermissions : string[]
}

const initialState: userState = {
  roleId: null,
  pagePermissions : []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state , action : PayloadAction<{roleId : number}>)=>{
      state.roleId = action.payload.roleId;
    },
    setPagePermission : (state , action : PayloadAction<string[]>)=>{
      state.pagePermissions = action.payload
    },
  },
});

// Export actions
export const { setUser , setPagePermission} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
