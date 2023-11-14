import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const URL = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
	cartItems: [],
	amount: 0,
	total: 0,
	status: 'loading',
	error: null,
};

export const fetchCartItems = createAsyncThunk(
	'cart/getCartItems',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios(URL);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== itemId
			);
		},
		increaseAmount: (state, action) => {
			const itemId = action.payload;
			const cartItem = state.cartItems.find((item) => item.id === itemId);
			cartItem.amount++;
		},
		decreaseAmount: (state, action) => {
			const itemId = action.payload;
			const cartItem = state.cartItems.find((item) => item.id === itemId);
			cartItem.amount--;
		},
		calculateTotal: (state) => {
			const sum = Array.isArray(state.cartItems)
				? state.cartItems.reduce(
						(acc, item) => {
							acc.amount += item.amount;
							acc.total += item.amount * item.price;
							return acc;
						},
						{ amount: 0, total: 0 }
				)
				: { amount: 0, total: 0 };

			state.amount = sum.amount;
			state.total = sum.total;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCartItems.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCartItems.fulfilled, (state, action) => {
				state.status = 'success';
				state.cartItems = action.payload;
			})
			.addCase(fetchCartItems.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.payload;
			});
	},
});

export const {
	clearCart,
	removeItem,
	increaseAmount,
	decreaseAmount,
	calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
