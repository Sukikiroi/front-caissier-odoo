import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  username:"",
  password:""
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
 



    login: (state, action) => {
        console.log(action.payload)
        state.username=action.payload.username
        state.password=action.payload.password
    },


    
  },
})

// Action creators are generated for each case reducer function
export const {login } = settingsSlice.actions

export default settingsSlice.reducer