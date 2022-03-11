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
			</div>
		</header>
	);
};

export default Header;
