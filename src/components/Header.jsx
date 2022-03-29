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

//CONTROLLERS
import { logout, getUserData } from "./controllers/httpRequests";

const Header = () => {
	const { isLogged, updateIsLogged } = useContext(IsLoggedContext);
	const { userData, setUserData } = useContext(UserDataContext);
	const [cookies, setCookie, removeCookie] = useCookies(["isLogged"]);

	const logoutHandler = async () => {
		try {
			const respuesta = await logout();

			if (respuesta === 200) {
				removeCookie("isLogged");
				updateIsLogged(false);
				setUserData({});
			} else {
				updateIsLogged(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		cookies.isLogged === "true" ? updateIsLogged(true) : updateIsLogged(false);
	}, [cookies.isLogged]);

	useEffect(async () => {
		if (isLogged) {
			try {
				const datosUsuario = await getUserData();
				datosUsuario ? setUserData(datosUsuario) : console.log("Ha ocurrido un error");
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
			{!isLogged && (
				<nav className={css.navContainerUnLogged}>
					<Link className={css.linkStyles} to='/login'>
						<Button buttonName='LOGIN' />
					</Link>
					<Link className={css.linkStyles} to='/register'>
						<Button buttonName='REGISTRARSE' />
					</Link>
				</nav>
			)}
			{isLogged && (
				<nav className={css.navContainerLogged}>
					<Link className={css.linkStyles} to='/profile'>
						<Avatar />
					</Link>
					<span className={css.showFollows}>
						<DisplayFollows valueData={userData.followers_number} txtData='Seguidores' />
						<DisplayFollows valueData={userData.following_number} txtData='Siguiendo' />
					</span>
					<Button buttonName='LOGOUT' clickHandler={logoutHandler} />
					<Link className={css.linkStyles} to='/publication'>
						<Button buttonName='+' />
					</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
