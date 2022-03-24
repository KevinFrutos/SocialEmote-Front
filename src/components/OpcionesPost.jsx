//CSS
import css from "./OpcionesPost.module.css";

//RESOURCES
import menuImgPath from "../assets/img/vertical-dots-menu.svg";
import Follow from "./Follow";

//IMPORTS
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";

const OpcionesPost = ({ user }) => {
	const { userData } = useContext(UserDataContext);
	const [isToggle, setIsToggle] = useState(false);

	return (
		<>
			<img onMouseOver={() => setIsToggle(true)} className={css.defaultButton} src={menuImgPath} alt='Menu dots' />
			{isToggle ? (
				<ul onMouseLeave={() => setIsToggle(false)} className={css.default}>
					{!userData.followers ? (
						<>
							<Link className={css.linkStyles} to='/login'>
								<li>Seguir</li>
							</Link>
						</>
					) : userData.user === user ? (
						<>
							<li>Editar Post</li>
							<li>Eliminar</li>
						</>
					) : (
						<>
							<Follow user={user} />
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
