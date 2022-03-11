//CSS
import css from "./Header.module.css";

//RESOURCES
import logoPath from "../assets/img/icon.svg";

//IMPORTS
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "./Button";
import ImageLink from "./ImageLink";

const Header = () => {
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

	return (
		<header className={css.headerContainer}>
			<Link to='/'>
				<ImageLink logoPath={logoPath} />
			</Link>
			<div className={css.menuContainer}>
				<Link to='/login'>
					<Button buttonName='LOGIN' />
				</Link>
				<Link to='/register'>
					<Button buttonName='REGISTRARSE' />
				</Link>
				{/* <Button buttonName='LOGOUT' onClick={() => logout()} /> */}
			</div>
		</header>
	);
};

export default Header;
