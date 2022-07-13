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
  incomeFilteredData:[],
  spendingFilteredData:[],
  spendingrealData:[],

  incomerealData:[],

  searchactivate: false,
  company:localStorage.getItem('company')? localStorage.getItem('company')[0].companyname:"",
  pageNumber:1,
  pageSize:1,
};

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
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


    updatespendingData:(state, action) => {
      state.spendingrealData = action.payload;
     
    },
    updatespedningFiltedData:(state, action) => {
      state.spendingFilteredData = action.payload;
     
    },
    updateincomeFiltedData:(state, action) => {
      state.incomeFilteredData = action.payload;
     
    },
    
    updateincomeData:(state, action) => {
      state.incomerealData = action.payload// paginate(action.payload, 6, 1)
      state.resultData=action.payload
       
      state.pageSize=(action.payload.length)/5
     
    },
    paginateData:(state,action)=>{
      state.incomerealData = action.payload
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
    },
    updatepagenumber:(state,action)=>{
      state.pageNumber=action.payload
      //state.incomerealData = paginate(state.incomerealData, 5, state.pageNumber);
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
  updatespendingData,
  updatespedningFiltedData,
  updateincomeData,
  updateincomeFiltedData,
  updatepagenumber,
  paginateData,
} = settingsSlice.actions;

export default settingsSlice.reducer;
