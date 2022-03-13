//CSS
import css from "./Publication.module.css";

//COMPONENT
import Avatar from "./Avatar";
import Follow from "./Follow";

const Publication = ({ user, description }) => {
	return (
		<article className={css.default}>
			<span className={css.user}>
				<Avatar />
				{user}
				<Follow user={user} />
			</span>
			<span className={css.description}>{description}</span>
		</article>
	);
};

export default Publication;
