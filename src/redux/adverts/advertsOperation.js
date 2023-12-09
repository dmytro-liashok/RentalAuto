import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instanceAPI";
import { toast } from "react-toastify";
import notifyOptions from "../../utils/notifyOptions";
import { applyFilters } from "../../utils/filtersAdverts";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=12`);
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

export const getAllAdverts = createAsyncThunk(
  "adverts/getAllAdverts",
  async ({ params }, thunkAPI) => {
    try {
      const currentPage = 1;
      const itemsPerPage = 12;
      console.log(params);
      const { data } = await instance.get(`/adverts`);
      const filteredAdverts = applyFilters(data, params);

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = currentPage * itemsPerPage;

      return filteredAdverts.slice(startIndex, endIndex);
    } catch (error) {
      toast.error(
        "Oops! Something went wrong! Please try again!",
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
