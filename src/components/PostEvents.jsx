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
import {url} from "./controllers/variables"

const PostEvents = ({ idPost }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	const postIndex = publicaciones.findIndex(item => item._id === idPost);

	const like = async () => {
		try {
			const respuesta = await fetch(`${url}/user/publication/like`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					idPost,
					user_like: userData.user,
				}),
			});
			const data = await respuesta.json();
			respuesta.status === 200 ? setPublicaciones(data) : console.log(respuesta.status);
		} catch (error) {
			console.log(error);
		}
	};

	const unlike = async () => {
		try {
			const respuesta = await fetch(`${url}/user/publication/like`, {
				method: "DELETE",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					idPost,
					user_like: userData.user,
				}),
			});
			const data = await respuesta.json();
			respuesta.status === 200 ? setPublicaciones(data) : console.log(respuesta.status);
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
						onClickHandler={like}
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
						onClickHandler={unlike}
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
