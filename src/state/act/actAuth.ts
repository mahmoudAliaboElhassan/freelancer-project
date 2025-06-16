import axiosInstance from "@/lib/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "authSlice/signUp",
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    console.log("userData from slice is", userData);
    try {
      const res = await axiosInstance.post("/api/auth/signup", userData);
      console.log("from slice res is");
      console.log(res);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // Handle 403 error here
        // Example: setConfirmed(true);
        console.log("400 Forbidden - User not authorized from slice");
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const logIn = createAsyncThunk(
  "authSlice/logIn",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axiosInstance.post(
        // The <LoginResponse> generic tells TypeScript what type the response should be.
        // This ensures res.data will be automatically typed as LoginResponse.

        // Inside createAsyncThunk<T>()
        // createAsyncThunk<User[]>("users/fetchUsers", async () => { ... })
        // 	Ensures the entire thunk function returns the expected type.

        // Axios (axiosInstance.post<T>()) ensures the API response is correctly typed.
        // createAsyncThunk<T>() ensures the entire Redux thunk function returns the correct type.

        // But they are related! In most cases,
        // you'd use both together to enforce type safety from API request to Redux state.
        "/api/Accounts/login",
        userData
      );
      console.log("from slice res is");
      console.log(res);
      return res.data;
    } catch (error: any) {
      console.log("error", error);
      if (error.response && error.response.status === 400) {
        // Handle 403 error here
        // Example: setConfirmed(true);
        console.log("400 Forbidden - User not authorized from slice");
      }
      return rejectWithValue(error);
    }
  }
);
