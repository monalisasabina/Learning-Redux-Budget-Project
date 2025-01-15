import {createSlice} from '@reduxjs/toolkit'

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers:{
    addTransaction: (state, action) => {
      const { category, description, amount, id } = action.payload;
      if (!state[category]) {
        state[category] = [];
      }
      state[category].push({ description, amount, id });
    },

    deleteTransaction: (state, action) =>{
      const { category, id } = action.payload;
      if (state[category]) {
        state[category] = state[category].filter((transaction) => transaction.id !== id);
      }
    }
  }
})

export const {addTransaction, deleteTransaction} =transactionSlice.actions

export default transactionsSlice.reducer


export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);


