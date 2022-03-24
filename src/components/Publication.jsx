//CSS
import css from "./Publication.module.css";

//COMPONENT
import Avatar from "./Avatar";
import Follow from "./Follow";
import HeartLike from "./HeartLike";
import OpcionesPost from "./OpcionesPost";

const Publication = ({ idPost, user, description }) => {
	return (
		<article className={css.default}>
			<span className={css.userContainer}>
				<span className={css.user}>
					<Avatar />
					{user}
				</span>
				{/* <Follow user={user} /> */}
				<OpcionesPost user={user} />
			</span>
			<span className={css.description}>{description}</span>
			<HeartLike idPost={idPost} />
		</article>
	);
};

export default Publication;
