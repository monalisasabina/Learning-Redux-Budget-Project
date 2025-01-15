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
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

export const budgetSlice = createSlice({
  name:'budgets',
  initialState,
  reducers:{
    editBudget:(state,action) => {
      const { category, amount } = action.payload;
      const budget = state.find((budget) => budget.category === category);
      if (budget) {
        budget.amount = amount;
    }
   },
 },
})

export const {editBudget} = budgetSlice.actions
export default budgetSlice.reducer
export const selectBudgets = (state) => state.budgets;

