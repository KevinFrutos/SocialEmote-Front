//CSS
import css from "./Publication.module.css";

//COMPONENT
import Avatar from "./Avatar";
import PostEvents from "./PostEvents";
import OpcionesPost from "./OpcionesPost";

//IMPORTS
import { useNavigate } from "react-router-dom";

const Publication = ({ idPost, user, description, descriptionHandler }) => {
	const navigate = useNavigate();

	const openPostHandler = () => {
		navigate(`/post/${idPost}`);
	};

	return (
		<article className={css.default}>
			<span className={css.userContainer}>
				<span className={css.user}>
					<Avatar />
					{user}
				</span>
				<OpcionesPost user={user} idPost={idPost} />
			</span>
			{descriptionHandler ? (
				<span className={css.description} onClick={openPostHandler}>
					{description}
				</span>
			) : (
				<span className={css.description}>{description}</span>
			)}

			<PostEvents idPost={idPost} />
		</article>
	);
};

export default Publication;
