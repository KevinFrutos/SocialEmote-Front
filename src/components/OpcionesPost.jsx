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
			<img onClick={() => setIsToggle(true)} className={css.defaultButton} src={menuImgPath} alt='Menu dots' />
			{isToggle ? (
				<ul onMouseLeave={() => setIsToggle(false)} className={css.default}>
					{!userData.followers ? (
						<>
							<Link className={css.linkStyles} to='/login'>
								<li>Seguir</li>
							</Link>
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>Cerrar</li>
						</>
					) : userData.user === user ? (
						<>
							<li>Editar Post</li>
							<li>Eliminar</li>
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>Cerrar</li>
						</>
					) : (
						<>
							<Follow user={user} />
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>Cerrar</li>
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
