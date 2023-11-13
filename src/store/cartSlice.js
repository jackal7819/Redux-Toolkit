import cartItems from '../cartItems';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
	isLoading: true,
};

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
				const sum = state.cartItems.reduce((acc, item) => {
				acc.amount += item.amount;
				acc.total += item.amount * item.price;
				return acc;
			}, {amount:0, total:0});

			state.amount = sum.amount;
			state.total = sum.total;
		}
	},
});

export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
