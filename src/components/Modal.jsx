import { clearCart } from '../store/cartSlice';
import { closeModal } from '../store/modalSlice';
import { useDispatch } from 'react-redux'

const Modal = () => {
	const dispatch = useDispatch();

	const clearCartHandler = () => {
		dispatch(clearCart());
		dispatch(closeModal());
	}
	const closeModalHandler = () => dispatch(closeModal());
	
	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your shopping cart?</h4>
				<div className="btn-container">
					<button className="btn confirm-btn" onClick={clearCartHandler}>confirm</button>
					<button className="btn clear-btn" onClick={closeModalHandler}>cancel</button>
				</div>
			</div>
		</aside>
	);
};

export default Modal;
