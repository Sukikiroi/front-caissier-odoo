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
  company:localStorage.getItem('company')[0].companyname
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addcoins: (state, action) => {
      state.coinone=action.payload.coinone
      state.cointwo= action.payload.cointwo
      state.cointree=action.payload.cointree
      state.coinone=action.payload.coinfour
      state.cointwo= action.payload.coinfive
      state.cointree=action.payload.coinsix
    },
    addpapers: (state, action) => {
      state.paperone=action.payload.paperone
      state.papertwo=action.payload.papertwo
      state.papertree=action.payload.papertree
    },

    updateData: (state, action) => {
      state.resultData = action.payload;
     
    },
    actiavtesearch: state => {
      state.searchactivate = true;
    },
    deactiavtesearch: state => {
      state.searchactivate = false;
    },
    setemail: (state, action) => {
      state.username = action.payload;
      
    },
    setpassword: (state, action) => {
       
      state.password = action.payload;
      
    },
    changecompany:(state,action)=>{
 console.log(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  changecompany,
  addcoins,
  addpapers,
  updateData,
  actiavtesearch,
  deactiavtesearch,
  setemail,
  setpassword,

} = settingsSlice.actions;

export default settingsSlice.reducer;
