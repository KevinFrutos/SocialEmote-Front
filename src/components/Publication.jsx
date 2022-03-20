//CSS
import css from "./Publication.module.css";

//COMPONENT
import Avatar from "./Avatar";
import Follow from "./Follow";
import HeartLike from "./HeartLike";

const Publication = ({ idPost, user, description }) => {
	return (
		<article className={css.default}>
			<span className={css.user}>
				<Avatar />
				{user}
				<Follow user={user} />
			</span>
			<span className={css.description}>{description}</span>
			<HeartLike idPost={idPost} user={user} />
		</article>
	);
};

export default Publication;
