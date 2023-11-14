import { calculateTotal, fetchCartItems } from './store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const { cartItems, status, error } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);

	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);

	useEffect(() => {
		dispatch(fetchCartItems());
	}, []);

	if (status === 'loading') {
		return <div className='loading'></div>;
	}

	if (status === 'error') {
		return <h2 className='alert'>{error}</h2>;
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
