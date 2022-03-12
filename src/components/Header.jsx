//CSS
import css from "./Header.module.css";

//RESOURCES
import logoPath from "../assets/img/icon.svg";

//IMPORTS
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

//CONTEXTS
import { IsLoggedContext } from "./contexts/IsLoggedContext";

//COMPONENTS
import Button from "./Button";
import ImageLink from "./ImageLink";

const Header = () => {
	const { isLogged, updateIsLogged } = useContext(IsLoggedContext);
	const [cookies] = useCookies(["isLogged"]);

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

	cookies.isLogged !== "true" ? updateIsLogged(false) : updateIsLogged(true);
	console.log(isLogged);

	return (
		<header className={css.headerContainer}>
			<Link to='/'>
				<ImageLink logoPath={logoPath} />
			</Link>
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
				{isLogged && <Button buttonName='LOGOUT' clickHandler={logout} />}
				{/* <Button buttonName='LOGOUT' clickHandler={logout} /> */}
			</div>
		</header>
	);
};

export default Header;
