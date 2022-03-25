//CSS
import css from "./Publication.module.css";

//COMPONENT
import Avatar from "./Avatar";
import PostEvents from "./PostEvents";
import OpcionesPost from "./OpcionesPost";

const Publication = ({ idPost, user, description }) => {
	return (
		<article className={css.default}>
			<span className={css.userContainer}>
				<span className={css.user}>
					<Avatar />
					{user}
				</span>
				<OpcionesPost user={user} />
			</span>
			<span className={css.description}>{description}</span>
			<PostEvents idPost={idPost} />
		</article>
	);
};

export default Publication;
