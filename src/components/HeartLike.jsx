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

const HeartLike = ({ idPost, user }) => {
	const { userData } = useContext(UserDataContext);
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	const follow = async () => {};
	const unfollow = async () => {};

	return (
		<>
			{!userData.user || !publicaciones ? (
				<></>
			) : userData.user &&
			  !publicaciones[publicaciones.findIndex(item => item._id === idPost)].likes
					.map(item => item.user_like)
					.includes(userData.user) ? (
				<img className={css.default} src={likeImgPath} alt='Corazón con carita sonriente' onClick={follow} />
			) : (
				<img className={css.default} src={unlikeImgPath} alt='Corazón con carita enfadada' onClick={unfollow} />
			)}
		</>
	);
};

export default HeartLike;
