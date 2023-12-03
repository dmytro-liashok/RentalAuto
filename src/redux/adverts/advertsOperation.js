import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instanceAPI";
import { toast } from "react-toastify";
import notifyOptions from "../../utils/notifyOptions";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=${12}`);
      return data;
    } catch (error) {
      toast.error(
        "Oops! Something went wrong! Please try again!",
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
