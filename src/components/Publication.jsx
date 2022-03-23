//CSS
import css from "./Publication.module.css";

import menuImgPath from "../assets/img/vertical-dots-menu.svg";

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
				{/* <img src={menuImgPath} alt='Menu dots' /> */}
			</span>
			<span className={css.description}>{description}</span>
			<HeartLike idPost={idPost} />
		</article>
	);
};

export default Publication;
