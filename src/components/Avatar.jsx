//CSS
import css from "./Avatar.module.css";

const Avatar = () => {
	const randomAvatar = Math.floor(Math.random() * (8 - 1 + 1) + 1);
	const avatarsPath = "/src/assets/img/avatars/";

	return (
		<>
			<img className={css.default} src={`${avatarsPath}avatar-${randomAvatar}.svg`} alt='sadsa' />
		</>
	);
};

export default Avatar;
