import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  posts: [],
  comments: [],
  loading: false,
  error: null,
};

export const __getDetailUser = createAsyncThunk(
  "posts/__getDetailUser",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/post/${payload}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __putDetailUser = createAsyncThunk(
  "put/__putDetailUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.put(`/post/${payload.id}`, payload.newstate);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteDetailUser = createAsyncThunk(
  "delete/__deleteDetailUser",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete(`/post/${payload}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
/////////////////////댓글
export const __postComment = createAsyncThunk(
  "post/__postComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/comment/`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getComment = createAsyncThunk(
  "get/__getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __putComment = createAsyncThunk(
  "put/__putComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.put(`/comment/`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteComment = createAsyncThunk(
  "delete/__deleteComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.delete(`/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DetailSlice = createSlice({
  name: "DetailComment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailUser.pending]: (state) => {
      state.loading = true;
    },
    [__getDetailUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.result;
    },
    [__getDetailUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__putDetailUser.pending]: (state) => {
      state.loading = true;
    },
    [__putDetailUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__putDetailUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //삭제
    [__deleteDetailUser.pending]: (state) => {
      state.loading = true;
    },
    [__deleteDetailUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deleteDetailUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    ////////댓글
    [__postComment.pending]: (state) => {
      state.loading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.posts = action.payload.result; 에러고쳐야함
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getComment.pending]: (state) => {
      state.loading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload.result;
      console.log(state.comments);
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__putComment.pending]: (state) => {
      state.loading = true;
    },
    [__putComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.comments = action.payload.result;
    },
    [__putComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteComment.pending]: (state) => {
      state.loading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = DetailSlice.actions;
export default DetailSlice.reducer;
