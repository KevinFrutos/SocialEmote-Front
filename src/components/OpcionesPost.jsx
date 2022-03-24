//CSS
import css from "./OpcionesPost.module.css";

//RESOURCES
import menuImgPath from "../assets/img/vertical-dots-menu.svg";
import Follow from "./Follow";

//IMPORTS
import { useContext, useState } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";

const OpcionesPost = ({ user }) => {
	const { userData } = useContext(UserDataContext);
	const [isToggle, setIsToggle] = useState(false);

	const toggleMenu = () => (isToggle ? setIsToggle(false) : setIsToggle(true));

	return (
		<>
			<img
				onClick={toggleMenu}
				className={css.defaultButton}
				src={menuImgPath}
				alt='Menu dots'
			/>
			{isToggle ? (
				<ul className={css.default}>
					{!userData.followers || userData.user === user ? (
						<></>
					) : (
						<>
							<Follow user={user} />
							<li>Editar Post</li>
							<li>Eliminar</li>
							<li onClick={toggleMenu}>Cerrar</li>
						</>
					)}
				</ul>
			) : (
				<></>
			)}
		</>
	);
};

export default OpcionesPost;