//CSS
import css from "./Header.module.css";

//RESOURCES
import logoPath from "../assets/img/icon.svg";

//IMPORTS
import { Link } from "react-router-dom";
//import { useCookies } from "react-cookie";

//COMPONENTS
import Button from "./Button";
import ImageLink from "./ImageLink";

const Header = () => {
	//const [isLogged] = useCookies(["isLogged"]);

	const logout = async () => {
		try {
			const respuesta = await fetch("http://localhost:9000/user/logout", {
				method: "POST",
				credentials: "include",
			});
			console.log(respuesta.status === 200 ? "OK" : respuesta.status);
		} catch (error) {
			console.log(error);
		}
	};

	//console.log(isLogged);

	return (
		<header className={css.headerContainer}>
			<Link to='/'>
				<ImageLink logoPath={logoPath} />
			</Link>
			<div className={css.menuContainer}>
				{!document.cookie.includes("isLogged=true") && (
					<Link to='/login'>
						<Button buttonName='LOGIN' />
					</Link>
				)}
				{!document.cookie.includes("isLogged=true") && (
					<Link to='/register'>
						<Button buttonName='REGISTRARSE' />
					</Link>
				)}
				{document.cookie.includes("isLogged=true") && <Button buttonName='LOGOUT' clickHandler={logout} />}
			</div>
		</header>
	);
};

export default Header;
