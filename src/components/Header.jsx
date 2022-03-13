//CSS
import css from "./Header.module.css";

//RESOURCES
import logoPath from "../assets/img/icon.svg";

//IMPORTS
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

//CONTEXTS
import { IsLoggedContext } from "./contexts/IsLoggedContext";
import { UserDataContext } from "./contexts/UserDataContext";

//COMPONENTS
import Button from "./Button";
import ImageLink from "./ImageLink";
import DisplayFollows from "./DisplayFollows";
import Avatar from "./Avatar";

const Header = () => {
	const { isLogged, updateIsLogged } = useContext(IsLoggedContext);
	const { userData, setUserData } = useContext(UserDataContext);
	const [cookies] = useCookies(["isLogged"]);

	const logout = async () => {
		try {
			const respuesta = await fetch("http://localhost:9000/user/logout", {
				method: "POST",
				credentials: "include",
			});

			if (respuesta.status === 200) {
				updateIsLogged(false);
				setUserData({});
			} else {
				updateIsLogged(true);
				console.log(respuesta.status);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (cookies.isLogged === "true") {
			updateIsLogged(true);
		} else {
			updateIsLogged(false);
		}
	}, [cookies.isLogged]);

	useEffect(async () => {
		if (isLogged) {
			try {
				const respuesta = await fetch("http://localhost:9000/user/data", {
					method: "GET",
					credentials: "include",
				});
				const datosUsuario = await respuesta.json();
				setUserData(datosUsuario);
			} catch (error) {
				console.log(error);
			}
		}
	}, [isLogged]);

	return (
		<header className={css.headerContainer}>
			<Link to='/'>
				<ImageLink logoPath={logoPath} />
			</Link>
			<h1 className={css.title}>SOCIALEMOTE</h1>
			<div className={css.menuContainer}>
				{!isLogged && (
					<>
						<Link className={css.linkStyles} to='/login'>
							<Button buttonName='LOGIN' />
						</Link>
						<Link className={css.linkStyles} to='/register'>
							<Button buttonName='REGISTRARSE' />
						</Link>
					</>
				)}
				{isLogged && (
					<>
						<Avatar />
						<DisplayFollows valueData={userData.followers_number} txtData='Seguidores' />
						<DisplayFollows valueData={userData.following_number} txtData='Siguiendo' />
						<Button buttonName='LOGOUT' clickHandler={logout} />
						<Link className={css.linkStyles} to='/publication'>
							<Button buttonName='+' />
						</Link>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
