//CSS
import css from "./HeartLike.module.css";

//RESOURCES
import likeImgPath from "../assets/img/like.svg";
import unlikeImgPath from "../assets/img/unlike.svg";

//IMPORTS
import { useContext } from "react";
import { Link } from "react-router-dom";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";
import { PublicationsDataContext } from "./contexts/PublicationsContext";

const HeartLike = ({ idPost }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	const postIndex = publicaciones.findIndex(item => item._id === idPost);

	const like = async () => {
		try {
			const respuesta = await fetch("http://localhost:9000/user/publication/like", {
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
			const respuesta = await fetch("http://localhost:9000/user/publication/like", {
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

	return (
		<>
			{!userData.user || !publicaciones ? (
				<span className={css.defaultContainer}>
					<Link className={css.linkStyles} to='/login'>
						<img className={css.default} src={likeImgPath} alt='Corazón con carita sonriente' />
					</Link>
						<span>{publicaciones[postIndex].likes.length ?? 0}</span>
				</span>
			) : userData.user && !publicaciones[postIndex].likes.map(item => item.user_like).includes(userData.user) ? (
				<span className={css.defaultContainer}>
					<img className={css.default} src={likeImgPath} alt='Corazón con carita sonriente' onClick={like} />
					<span>{publicaciones[postIndex].likes.length ?? 0}</span>
				</span>
			) : (
				<span className={css.defaultContainer}>
					<img className={css.default} src={unlikeImgPath} alt='Corazón con carita enfadada' onClick={unlike} />
					<span>{publicaciones[postIndex].likes.length ?? 0}</span>
				</span>
			)}
		</>
	);
};

export default HeartLike;
