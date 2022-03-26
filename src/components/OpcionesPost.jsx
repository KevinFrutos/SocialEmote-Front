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
import { PublicationsDataContext } from "./contexts/PublicationsContext";

//CONTROLLERS
import { eliminarPost } from "./controllers/httpRequests";

const OpcionesPost = ({ user, idPost }) => {
	const { userData } = useContext(UserDataContext);
	const [isToggle, setIsToggle] = useState(false);
	const { setPublicaciones } = useContext(PublicationsDataContext);

	const eliminarPostHandler = async () => {
		try {
			const data = await eliminarPost(idPost);
			data ? setPublicaciones(data) : console.log("Ha ocurrido un error");
		} catch (error) {
			console.log(error);
		}
	};

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
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>
								Cerrar
							</li>
						</>
					) : userData.user === user ? (
						<>
							<li>Editar Post</li>
							<li onClick={eliminarPostHandler}>Eliminar</li>
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>
								Cerrar
							</li>
						</>
					) : (
						<>
							<Follow user={user} />
							<li className={css.defaultMobile} onClick={() => setIsToggle(false)}>
								Cerrar
							</li>
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
