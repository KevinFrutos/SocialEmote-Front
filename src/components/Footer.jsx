//CSS
import css from "./Footer.module.css";

//RESOURCES
import logoPath from "../assets/img/icon.svg";

//IMPORTS
import { Link } from "react-router-dom";

//COMPONENTS
import ImageLink from "./ImageLink";

const Footer = () => {
	return (
		<footer className={css.footerContainer}>
			<Link to='/'>
				<ImageLink logoPath={logoPath} />
			</Link>
		</footer>
	);
};

export default Footer;
