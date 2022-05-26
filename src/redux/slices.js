import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  username: '',
  password: '',
  paperone: 0,
  papertwo: 0,
  papertree: 0,

  coinone: 0,
  cointwo: 0,
  cointree: 0,
  coinfour: 0,
  coinfive: 0,
  coinsix: 0,

  customerfilter: '',
  userfilter: '',
  date: '',
  time: '',

  resultData: [],
  searchactivate: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addcoins: (state, action) => {
      console.log(action.payload);
    },
    addpapers: (state, action) => {
      console.log(action.payload);
    },

    updateData: (state, action) => {
      state.resultData = action.payload;
      console.log(action.payload);
    },
    actiavtesearch: state => {
      state.searchactivate = true;
    },
    deactiavtesearch: state => {
      state.searchactivate = false;
    },
    setemail: (state, action) => {
      state.username = action.payload;
      console.log(action.payload);
    },
    setpassword: (state, action) => {
      console.log(action.payload);
      state.password = action.payload;
      
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  addcoins,
  addpapers,
  updateData,
  actiavtesearch,
  deactiavtesearch,
  setemail,
  setpassword,

} = settingsSlice.actions;

export default settingsSlice.reducer;
