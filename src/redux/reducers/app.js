import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fetchLoading: false,
  photos: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearPhotos(state) {
      state.photos = [];
    },
    setPhotos(state, action) {
      state.photos = action.payload;
    },
    fetchStart(state) {
      state.fetchLoading = true;
    },
    fetchEnd(state) {
      state.fetchLoading = false;
    }
  }
})

const {
  fetchStart,
  fetchEnd,
  clearPhotos,
  setPhotos,
} = appSlice.actions;

import axios from 'axios'

function fetchOperation(url, {
  options,
  onSuccess,
  onError,
  transformResponse
}) {
  return async (dispatch, getState) => {
    const opts = options || {};
    const onsuccess = onSuccess || (() => { });
    const errorhandler = onError || (err => { throw err })
    const transform = transformResponse || (res => res);

    let res = {};

    try {
      dispatch(fetchStart());

      res = await axios(url, opts);
      res = transform(res);

      onsuccess(res, { dispatch, getState });
    } catch (err) {
      dispatch(fetchEnd());

      errorhandler(err);
    }

    dispatch(fetchEnd());

    return res;
  }
}

function fetchPhotos(url, options) {
  return async (dispatch, getState) => {
    dispatch(clearPhotos());

    await dispatch(fetchOperation(url, {
      options,
      transformResponse: res => res.data,
      onSuccess: (data, { dispatch, getState }) => {
        dispatch(setPhotos(data));
      }
    }))
  }
}

export {
  fetchStart,
  fetchEnd,
  setPhotos,
  clearPhotos,
  fetchOperation,
  fetchPhotos,
}

export default appSlice.reducer