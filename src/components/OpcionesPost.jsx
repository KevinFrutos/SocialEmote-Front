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
import {url} from "./controllers/variables"

const OpcionesPost = ({ user, idPost }) => {
	const { userData } = useContext(UserDataContext);
	const [isToggle, setIsToggle] = useState(false);
	const { setPublicaciones } = useContext(PublicationsDataContext);

	const eliminarPost = async () => {
		try {
			const respuesta = await fetch(`${url}/user/publication`, {
				method: "DELETE",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					idPost,
				}),
			});
			const data = await respuesta.json();
			respuesta.status === 200 ? setPublicaciones(data) : console.log(respuesta.status);
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
							<li onClick={eliminarPost}>Eliminar</li>
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
