import { useDispatch, useSelector } from 'react-redux';

import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotal } from './store/cartSlice';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);

	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
