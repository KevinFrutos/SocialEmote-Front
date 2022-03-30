//CSS
import css from "./Modal.module.css";

const Modal = ({ children }) => {
	return (
		<div className={css.defaultModalContainer}>
			<div className={css.defaultModal}>{children}</div>
		</div>
	);
};

export default Modal;
