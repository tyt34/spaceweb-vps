import { createSlice } from '@reduxjs/toolkit'
import { typeReq } from "../../shared/types/main"

interface Props {
  data: typeReq
}

const initialState: Props = {
  data: {
    id: '',
    jsnrpc: '',
    version: '',
    result: {
      categories: [],
      datacenters: [],
      osPanel: [],
      selectOs: [],
      selectPanel: [],
      vpsPlans: []
    }
  }
}

export const counterReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getDataFromApi: (state, action: any) => {
      state.data = action.payload
    },
  },
})

export const { getDataFromApi } = counterReducer.actions
