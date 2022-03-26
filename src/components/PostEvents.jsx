//CSS
import css from "./PostEvents.module.css";

//RESOURCES
import likeImgPath from "../assets/img/like.svg";
import unlikeImgPath from "../assets/img/unlike.svg";
import commentImgPath from "../assets/img/comment.svg";

//COMPONENTS
import EmoteCounter from "./EmoteCounter";

//IMPORTS
import { useContext } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";
import { PublicationsDataContext } from "./contexts/PublicationsContext";

//CONTROLLERS
import { like, unlike } from "./controllers/httpRequests";

const PostEvents = ({ idPost }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

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

	const comment = () => {};

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
						onClickHandler={comment}
						imgPath={commentImgPath}
						altDescription='Caja de comentario flotante de color morado'
						counter={publicaciones[postIndex].comments.length}
					/>
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
						onClickHandler={comment}
						imgPath={commentImgPath}
						altDescription='Caja de comentario flotante de color morado'
						counter={publicaciones[postIndex].comments.length}
					/>
				</>
			)}
		</span>
	);
};

export default PostEvents;
