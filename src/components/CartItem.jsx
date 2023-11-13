import { ChevronDown, ChevronUp } from '../icons';
import { decreaseAmount, increaseAmount, removeItem } from '../store/cartSlice';

import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(removeItem(id));
	};

	const increaseAmountHandler = () => {
		dispatch(increaseAmount(id));
	};

	const decreaseAmountHandler = () => {
		amount === 1 ? dispatch(removeItem(id)) : dispatch(decreaseAmount(id));
	};

	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button className='remove-btn' onClick={removeItemHandler}>
					remove
				</button>
			</div>
			<div>
				<button className='amount-btn' onClick={increaseAmountHandler}>
					<ChevronUp />
				</button>
				<p className='amount'>{amount}</p>
				<button className='amount-btn' onClick={decreaseAmountHandler}>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
