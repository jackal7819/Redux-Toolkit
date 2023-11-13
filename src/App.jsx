import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotal } from './store/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	
	const dispatch = useDispatch();
	
	useEffect(()=>{
		dispatch(calculateTotal())
	}, [cartItems])
	
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
