import { Action, createAction, createAsyncThunk, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import gettingCurrentSlide from '../services/currentSlide'
import { DateType, HoursType } from '../types/timeTypes'

interface DateState {
  days: DateType[]
  times: HoursType[]
  chosenD: DateType
  chosenH: HoursType
}

const initialState = { 
  days:[{day:0,date:0} as DateType], 
  times:[{hhmm:''} as HoursType], 
  chosenD:{day:0,date:0} as DateType,
  chosenH:{hhmm:''} as HoursType} as DateState

//handling async rquest for slide changes
export const fetchDate = createAsyncThunk(       
  "fetchDate",
  async (ref:React.MutableRefObject<any>)  => {
    const resp= await gettingCurrentSlide(ref)
    return resp
  }
)

export const fetchHour = createAsyncThunk(
  "fetchHour",
  async (ref:React.MutableRefObject<any>)  => {
    const resp= await gettingCurrentSlide(ref)
    return resp
  }
)



const dateSlice = createSlice({
  name:"date",
  initialState,
  reducers:{
    setDay(state,action:PayloadAction<DateType[]>){
      state.days=action.payload
      state.chosenD=action.payload[0]
    },
    setTime(state,action:PayloadAction<HoursType[]>){
      state.times=action.payload
      state.chosenH=action.payload[0]
    }
  },
  extraReducers:{
    [fetchDate.fulfilled.type]:(state,action)=>{
      state.chosenD=state.days[action.payload]
    },
    [fetchHour.fulfilled.type]:(state,action)=>{
      state.chosenH=state.times[action.payload]
    }
  }
})

export const {setDay, setTime}=dateSlice.actions
export default dateSlice.reducer