import css from "./ImageLink.module.css";

const ImageLink = ({ logoPath, altImage = "Logo de SocialEmote", imgClass = css.default }) => {
	return <img src={logoPath} alt={altImage} className={imgClass} />;
};

export default ImageLink;
