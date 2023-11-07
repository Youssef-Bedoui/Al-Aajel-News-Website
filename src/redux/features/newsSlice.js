import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsApi from "../../api/NewsApi";
import config from "../../config.json";

const api_key = config.api_key;

const initialState = {
  breakingNews: [],
  homeNews: [],
  news: [],
};

export const getBreakingNews = createAsyncThunk("news/Breaking", async () => {
  try {
    const response = await newsApi.get(
      `/top-headlines?language=en&apiKey=${api_key}`
    );
    console.log(response.data.articles.slice(0, 6), "here");
    return response.data.articles.slice(0, 4);
  } catch (error) {
    console.log(error);
  }
});

export const getHomeNews = createAsyncThunk("news/HomeNews", async () => {
  try {
    const response = await newsApi.get(
      `/top-headlines?language=en&apiKey=${api_key}`
    );
    console.log(response.data, "article home");
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
});

export const getNewsByCategory = createAsyncThunk(
  "news/NewsCategory",
  async ({ category }) => {
    try {
      const response = await newsApi.get(
        `/top-headlines?category=${category}&language=en&apiKey=${api_key}`
      );
      console.log(response.data, category, "article category");
      return response.data.articles;
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // getBreakingNews: (state, action) => {
    //   state.breakingNews = action.payload;
    // },
    // getNews: (state, action) => {
    //   state.news = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBreakingNews.pending, () => {})
      .addCase(getBreakingNews.fulfilled, (state, action) => {
        state.breakingNews = action.payload;
      })
      .addCase(getBreakingNews.rejected, (state) => {})
      .addCase(getHomeNews.pending, () => {})
      .addCase(getHomeNews.fulfilled, (state, action) => {
        state.homeNews = action.payload;
      })
      .addCase(getHomeNews.rejected, (state) => {})
      .addCase(getNewsByCategory.pending, () => {})
      .addCase(getNewsByCategory.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(getNewsByCategory.rejected, (state) => {});
  },
});
// export const { getBreakingNews, getNews } = newsSlice.actions;
export default newsSlice.reducer;
