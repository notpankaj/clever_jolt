import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCrates = createAsyncThunk(
  "crates/getCrates",
  async (dispatch, getState) => {
    return await fetch("http://3.93.232.147:9000/getAllCrates").then((res) =>
      res.json()
    );
  }
);

export const addCrate = createAsyncThunk(
  "crates/addCrate",
  async (crate, { dispatch, getState }) => {
    const payload = {
      crate_id: null,
      user_id: 1000,
      crate_name: crate.name,
      crate_description: crate.crate_description,
      crate_image: crate.crate_image,
      crate_preview_video: crate.crate_preview_video,
      crate_tutorial_video: crate.crate_tutorial_video,
      crate_contents: crate.contents,
      category: crate.category,
      is_single_crate: crate.is_single_crate,
      price: crate.price,
      cost_tier: crate.cost_tier,
      age_range: crate.age_range,
      is_active: crate.is_active,
    };

    console.log(payload, "payload");
    // const formData = new FormData();
    // formData.append("name", crate.name);
    // formData.append("crate_description", crate.crate_description);
    // formData.append("image", crate.crate_image);
    // formData.append("contents", crate.contents);
    // formData.append("category", crate.category);
    // formData.append("age_range", crate.age_range);
    // formData.append("is_single_crate", crate.is_single_crate);
    // formData.append("price", crate.price);
    // formData.append("cost_tier", crate.cost_tier);
    // formData.append("is_active", crate.is_active);
    // formData.append("crate_preview_video", crate.crate_preview_video);
    // formData.append("crate_tutorial_video", crate.crate_tutorial_video);

    const url = "http://3.93.232.147:9000/addUpdateCrate";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    return response;

    // return await fetch("http://3.93.232.147:9000/addUpdateCrate", {
    //   method: "post",
    //   headers: { "Content-Type": "multipart/form-data" },
    //   data: formData,
    // }).then((res) => res.json());
  }
);

const cratesSlice = createSlice({
  name: "crate",
  initialState: {
    crates: [],
    status: null,
    error: null,
    message: null,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.status = null;
    },
  },
  extraReducers: {
    [getCrates.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getCrates.fulfilled]: (state, action) => {
      state.status = "success";
      state.crates = action.payload;
    },
    [getCrates.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [addCrate.pending]: (state, action, extra) => {
      state.status = "loading";
      state.error = null;
    },
    [addCrate.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload);
      state.message = action.payload;
    },
    [addCrate.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message || true;
    },
  },
});
export const { reset } = cratesSlice.actions;
export default cratesSlice.reducer;
