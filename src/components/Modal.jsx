//CSS
import css from "./Modal.module.css";

//COMPONENTS
import Input from "./Input";
import Button from "./Button";

//IMPORTS
import { useContext, useState } from "react";

//CONTEXTS
import { PublicationsDataContext } from "./contexts/PublicationsContext";

//CONTROLLERS
import { addComment } from "./controllers/httpRequests";

const Modal = ({ idPost, onClickCloseHandler }) => {
	const { setPublicaciones } = useContext(PublicationsDataContext);
	const [comment, setComment] = useState("");

	const addCommentHandler = async () => {
		try {
			console.log(comment);
			const respuesta = await addComment(idPost, comment);
			if (respuesta) {
				setPublicaciones(respuesta);
				onClickCloseHandler();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={css.defaultModalContainer}>
			<div className={css.defaultModal}>
				<Input
					labelName='Comentario'
					forName='comment'
					placeholderText='Escribe algo bonito aqui 💜'
					onChangeHandler={e => setComment(e.target.value)}
					isText='true'
				/>
				<Button buttonClass={css.submitButton} buttonName='COMENTAR' clickHandler={addCommentHandler} />
				<Button buttonClass={css.submitButton} buttonName='CANCELAR' clickHandler={onClickCloseHandler} />
			</div>
		</div>
	);
};

export default Modal;
