//CSS
import css from "./PostEvents.module.css";

//RESOURCES
import likeImgPath from "../assets/img/like.svg";
import unlikeImgPath from "../assets/img/unlike.svg";
import commentImgPath from "../assets/img/comment.svg";

//COMPONENTS
import EmoteCounter from "./EmoteCounter";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

//IMPORTS
import { useContext, useState } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";
import { PublicationsDataContext } from "./contexts/PublicationsContext";

//CONTROLLERS
import { like, unlike, addComment } from "./controllers/httpRequests";

const PostEvents = ({ idPost }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [comment, setComment] = useState("");

	const postIndex = publicaciones.findIndex(item => item._id === idPost);

	const likeHandler = async () => {
		try {
			const data = await like(idPost, userData.user);
			data ? setPublicaciones(data) : console.log("Ha ocurrido un error");
		} catch (error) {
			console.log(error);
		}
	};

	const unlikeHandler = async () => {
		try {
			const data = await unlike(idPost, userData.user);
			data ? setPublicaciones(data) : console.log("Ha ocurrido un error");
		} catch (error) {
			console.log(error);
		}
	};

	const addCommentHandler = async () => {
		if (comment.length > 256) {
			return alert("El comentario no puede superar los 256 caracteres");
		}
		try {
			console.log(comment);
			const respuesta = await addComment(idPost, comment);
			if (respuesta) {
				setPublicaciones(respuesta);
				closeCommentModal();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const openCommentModal = () => {
		setModalIsOpen(true);
	};

	const closeCommentModal = () => {
		setModalIsOpen(false);
	};

	return (
		<span className={css.defaultContainer}>
			{!userData.user || !publicaciones ? (
				<>
					<EmoteCounter
						toPath='/login'
						imgPath={likeImgPath}
						altDescription='Corazón con carita sonriente'
						counter={publicaciones[postIndex].likes.length}
					/>
					<EmoteCounter
						toPath='/login'
						imgPath={commentImgPath}
						altDescription='Caja de comentario flotante de color morado'
						counter={publicaciones[postIndex].comments.length}
					/>
				</>
			) : userData.user && !publicaciones[postIndex].likes.map(item => item.user_like).includes(userData.user) ? (
				<>
					<EmoteCounter
						onClickHandler={likeHandler}
						imgPath={likeImgPath}
						altDescription='Corazón con carita sonriente'
						counter={publicaciones[postIndex].likes.length}
					/>
					<EmoteCounter
						onClickHandler={openCommentModal}
						imgPath={commentImgPath}
						altDescription='Caja de comentario flotante de color morado'
						counter={publicaciones[postIndex].comments.length}
					/>
					{modalIsOpen && (
						<Modal idPost={idPost} closeCommentModal={closeCommentModal}>
							<Input
								labelName='Comentario'
								forName='comment'
								placeholderText='Escribe algo bonito aqui 💜'
								onChangeHandler={e => setComment(e.target.value)}
								isText='true'
							/>
							<Button buttonClass={css.submitButton} buttonName='COMENTAR' clickHandler={addCommentHandler} />
							<Button buttonClass={css.submitButton} buttonName='CANCELAR' clickHandler={closeCommentModal} />
						</Modal>
					)}
				</>
			) : (
				<>
					<EmoteCounter
						onClickHandler={unlikeHandler}
						imgPath={unlikeImgPath}
						altDescription='Corazón con carita enfadada'
						counter={publicaciones[postIndex].likes.length}
					/>
					<EmoteCounter
						onClickHandler={openCommentModal}
						imgPath={commentImgPath}
						altDescription='Caja de comentario flotante de color morado'
						counter={publicaciones[postIndex].comments.length}
					/>
					{modalIsOpen && (
						<Modal idPost={idPost} closeCommentModal={closeCommentModal}>
							<Input
								labelName='Comentario'
								forName='comment'
								placeholderText='Escribe algo bonito aqui 💜'
								onChangeHandler={e => setComment(e.target.value)}
								isText='true'
							/>
							<Button buttonClass={css.submitButton} buttonName='COMENTAR' clickHandler={addCommentHandler} />
							<Button buttonClass={css.submitButton} buttonName='CANCELAR' clickHandler={closeCommentModal} />
						</Modal>
					)}
				</>
			)}
		</span>
	);
};

export default PostEvents;
