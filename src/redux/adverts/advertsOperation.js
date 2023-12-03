import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instanceAPI";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=${12}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
