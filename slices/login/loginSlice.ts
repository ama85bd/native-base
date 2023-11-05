import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface LoginState {
  status: string;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  status: 'idle',
  isAuthenticated: false,
};

export const loginUser = createAsyncThunk('login/loginUser', async () => {
  try {
    return true;
  } catch (error: any) {
    console.log('thunk error', error);
  }
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      console.log('action loging', action);
      console.log('state loging', state);
      state.status = 'pendingUserRegister';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('action loging fulfilled', action);
      state.status = 'idle';
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log('state loging rejected', state);
      console.log('action loging rejected', action);
      // showToast('error', 'Rejected!');
      throw action.payload;
    });
  },
});

export const { signOut } = loginSlice.actions;
