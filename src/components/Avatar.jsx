//CSS
import css from "./Avatar.module.css";

// SOLO QUIERO QUE CAMBIE EL ICONO DEL AVATAR UNA VEZ QUE ENTRAS EN LA APP
// NO CADA VEZ QUE EL HEADER RENDERIZA
const randomAvatar = Math.floor(Math.random() * (8 - 1 + 1) + 1);

const Avatar = () => {
	const avatarsPath = "/src/assets/img/avatars/";

	return (
		<>
			<img className={css.default} src={`${avatarsPath}avatar-${randomAvatar}.svg`} alt='sadsa' />
		</>
	);
};

export default Avatar;
