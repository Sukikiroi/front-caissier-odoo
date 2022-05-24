import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  username: 0,
  password: 0,
  paperone: 0,
  papertwo: 0,
  papertree: 0,



  coinone: 0,
  cointwo :0,
  cointree: 0,
  coinfour: 0,
  coinfive: 0,
  coinsix: 0,



  customerfilter:'',
  userfilter:'',
  date:'',
  time:'',
  
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
 
addcoins:(state,action)=>{
console.log(action.payload)
},
addpapers:(state,action)=>{
  console.log(action.payload)
  },


    login: (state, action) => {
        console.log(action.payload)
        state.username=action.payload.username
        state.password=action.payload.password
    },


    
  },
})

// Action creators are generated for each case reducer function
export const {login,addcoins,addpapers } = settingsSlice.actions

export default settingsSlice.reducer