import css from "./ImageLink.module.css";

const ImageLink = ({ linkPath = "/", logoPath, altImage = "Logo de SocialEmote", imgClass = css.default }) => {
	return (
		<a href={linkPath}>
			<img src={logoPath} alt={altImage} className={imgClass} />
		</a>
	);
};

export default ImageLink;
