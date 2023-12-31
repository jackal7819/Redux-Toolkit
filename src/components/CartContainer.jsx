import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import { openModal } from '../store/modalSlice';

const CartContainer = () => {
	const dispatch = useDispatch();
	const { cartItems, total, amount } = useSelector((state) => state.cart);

	const openModalHandler = () => dispatch(openModal());
	
	if (amount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>your bag</h2>
					<h3 className='empty-cart'>is currently empty</h3>
				</header>
			</section>
		);
	}
	return (
		<section className='cart'>
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={openModalHandler}>clear cart</button>
            </footer>
		</section>
	);
};

export default CartContainer;
