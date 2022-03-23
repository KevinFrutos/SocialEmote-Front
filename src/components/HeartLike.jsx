//CSS
import css from "./HeartLike.module.css";

//RESOURCES
import likeImgPath from "../assets/img/like.svg";
import unlikeImgPath from "../assets/img/unlike.svg";

//IMPORTS
import { useContext } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";
import { PublicationsDataContext } from "./contexts/PublicationsContext";

const HeartLike = ({ idPost }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	const postIndex = publicaciones.findIndex(item => item._id === idPost);

	const follow = async () => {
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

	const unfollow = async () => {
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
				<></>
			) : userData.user && !publicaciones[postIndex].likes.map(item => item.user_like).includes(userData.user) ? (
				<img className={css.default} src={likeImgPath} alt='Corazón con carita sonriente' onClick={follow} />
			) : (
				<img className={css.default} src={unlikeImgPath} alt='Corazón con carita enfadada' onClick={unfollow} />
			)}
		</>
	);
};

export default HeartLike;
