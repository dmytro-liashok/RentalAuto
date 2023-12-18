import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instanceAPI";
import { toast } from "react-toastify";
import notifyOptions from "../../utils/notifyOptions";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, brand = "" }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/adverts?limit=12&page=${page}&make=${brand}`
      );

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
