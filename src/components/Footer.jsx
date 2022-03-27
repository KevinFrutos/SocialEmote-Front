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
			<p className={css.copyright}>Created and designed by © <a href="https://github.com/KevinFrutos/SocialEmote-Front" target="_blank">Kevin Frutos</a></p>
		</footer>
	);
};

export default Footer;
