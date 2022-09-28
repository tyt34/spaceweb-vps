import { createSlice } from '@reduxjs/toolkit'
import { typeReq } from "../../shared/types/main"
import type { PayloadAction } from '@reduxjs/toolkit'

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
    getDataFromApi: (state, action: PayloadAction<typeReq>) => {
      state.data = action.payload
    },
  },
})

export const { getDataFromApi } = counterReducer.actions
